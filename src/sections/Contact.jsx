// src/sections/Contact.jsx
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { BRAND, NEWSLETTER } from "../data/content";
import { Send, CheckCircle2, AlertTriangle, Phone, MapPin, Mail } from "lucide-react";

import Toast from "../components/Toast";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const alertAnim = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.25, ease: "easeIn" } },
};

function Field({ label, required, children }) {
  return (
    <div>
      <label className="text-sm font-extrabold text-white">
        {label}
        {required ? <span className="text-jdk-cyan"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const formEndpoint = useMemo(() => {
    const key = BRAND.web3formAccessKey?.trim();
    return key ? "https://api.web3forms.com/submit" : "";
  }, []);

  const [form, setForm] = useState({ name: "", email: "", message: "", file: null });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | loading | success | error
  useEffect(() => {
    if (status.state === "success") {
      const timer = setTimeout(() => setStatus({ state: "idle", message: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [status.state]);
  
    const [toast, setToast] = useState(null);

    const onSubmit = async (e) => {
    e.preventDefault();

    if (!formEndpoint) {
      setStatus({
        state: "error",
        message:
          "Web3Form is not configured. Ensure the access key is set in src/data/content.js (BRAND.web3formAccessKey).",
      });
      return;
    }

    setStatus({ state: "loading", message: "" });

    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("message", form.message);
      fd.append("access_key", BRAND.web3formAccessKey?.trim());
      
      

      const res = await fetch(formEndpoint, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = data?.error || "Something went wrong submitting the form. Please try again.";
        setStatus({ state: "error", message: msg });
        return;
      }

      setStatus({ state: "success", message: "Message sent successfully. We’ll get back to you soon." });
      setForm({ name: "", email: "", message: "", file: null });
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
    // Show toast for any status change
    if (status.state !== "idle") {
      setToast({ type: status.state, message: status.message });
    }
  };

  

  return (
    <Section
      id="contact"
      eyebrow="Contact us"
      title="We are here to assist"
      subtitle="To leverage our expertise in achieving your corporate objectives, please submit your request."
      className="bg-jdk-dark"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {/* LEFT: FORM */}
        <motion.div variants={fadeUp}>
          <Card className="relative overflow-hidden bg-jdk-dark/80">
            {/* soft accents */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-jdk-cyan/10 blur-[80px]" />
            <div className="pointer-events-none absolute -left-28 -bottom-28 h-64 w-64 rounded-full bg-jdk-purple/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-5">
                <p className="text-sm font-extrabold text-white">Send a message</p>
                <p className="mt-1 text-sm text-gray-400">
                  Share a bit about your need and we’ll respond with next steps.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="mt-2 w-full rounded-xl border border-gray-800 bg-jdk-black text-white px-4 py-3 text-sm outline-none transition focus:border-jdk-cyan focus:ring-2 focus:ring-jdk-cyan/50 placeholder:text-gray-600"
                      placeholder="Your name"
                      required
                    />
                  </Field>

                  <Field label="Email" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="mt-2 w-full rounded-xl border border-gray-800 bg-jdk-black text-white px-4 py-3 text-sm outline-none transition focus:border-jdk-cyan focus:ring-2 focus:ring-jdk-cyan/50 placeholder:text-gray-600"
                      placeholder="you@email.com"
                      required
                    />
                  </Field>
                </div>

                <Field label="Message" required>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="mt-2 min-h-[150px] w-full rounded-xl border border-gray-800 bg-jdk-black text-white px-4 py-3 text-sm outline-none transition focus:border-jdk-cyan focus:ring-2 focus:ring-jdk-cyan/50 placeholder:text-gray-600"
                    placeholder="Tell us what you need help with..."
                    required
                  />
                </Field>



                {/* Submit */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <Button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="
                      rounded-xl border-none
                      bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white
                      transition-all duration-300
                      hover:opacity-90
                      hover:-translate-y-0.5
                      hover:shadow-[0_14px_40px_rgba(213,0,249,0.35)]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {status.state === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        Sending…
                        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      </span>
                    ) : (
                      <>
                        Send <Send size={16} />
                      </>
                    )}
                  </Button>
                </div>

                {/* Alerts */}
                <AnimatePresence mode="wait">
                  {status.state === "success" && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                      <motion.div
                        key="success"
                        variants={alertAnim}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="flex items-start gap-2 rounded-2xl border border-jdk-cyan/30 bg-jdk-cyan/10 p-4 text-sm font-bold text-jdk-cyan backdrop-blur-md"
                      >
                        <CheckCircle2 size={18} className="mt-0.5" />
                        <span>{status.message}</span>
                      </motion.div>
                    </div>
                  )}
                  {toast && (
                    <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />
                  )}

                  {status.state === "error" ? (
                    <motion.div
                      key="error"
                      variants={alertAnim}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="flex items-start gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-bold text-red-500 backdrop-blur-md"
                    >
                      <AlertTriangle size={18} className="mt-0.5" />
                      <span>{status.message}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>


              </form>
            </div>
          </Card>
        </motion.div>

        {/* RIGHT: INFO + NEWSLETTER */}
        <motion.div variants={fadeUp}>
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="relative overflow-hidden bg-jdk-dark/80">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-jdk-purple/10 blur-[80px]" />

              <p className="text-sm font-extrabold text-white">Direct Contact</p>
              <p className="mt-2 text-sm text-gray-400">{BRAND.name}</p>

              <div className="mt-4 grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-jdk-black p-4 transition hover:border-gray-700">
                  <Phone size={18} className="mt-0.5 text-jdk-cyan block shrink-0" />
                  <div>
                    <p className="text-xs font-extrabold text-gray-500">Phone</p>
                    <p className="mt-1 text-sm font-extrabold text-white break-words">{BRAND.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-jdk-black p-4 transition hover:border-gray-700">
                  <MapPin size={18} className="mt-0.5 text-jdk-cyan block shrink-0" />
                  <div>
                    <p className="text-xs font-extrabold text-gray-500">Location</p>
                    <p className="mt-1 text-sm font-extrabold text-white break-words">{BRAND.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-jdk-black p-4 transition hover:border-gray-700">
                  <Mail size={18} className="mt-0.5 text-jdk-cyan block shrink-0" />
                  <div>
                    <p className="text-xs font-extrabold text-gray-500">Email</p>
                    <p className="mt-1 text-sm font-extrabold text-white">
                      Use the form to reach us
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="relative overflow-hidden bg-jdk-dark/80">
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-jdk-cyan/10 blur-[80px]" />

              <p className="text-sm font-extrabold text-white">{NEWSLETTER.title}</p>
              <p className="mt-2 text-sm text-gray-400">{NEWSLETTER.subtitle}</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Newsletter demo. Hook to Mailchimp/ConvertKit later.");
                }}
                className="mt-4 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  name="email"
                  className="w-full flex-1 rounded-xl border border-gray-800 bg-jdk-black text-white px-4 py-3 text-sm outline-none transition focus:border-jdk-cyan focus:ring-2 focus:ring-jdk-cyan/50 placeholder:text-gray-600"
                  placeholder="Email Address"
                  required
                />
                <Button
                  type="submit"
                  className="
                    rounded-xl border-none
                    bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white
                    hover:opacity-90
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_20px_rgba(213,0,249,0.3)]
                    sm:w-auto
                  "
                >
                  Sign up
                </Button>
              </form>

              <p className="mt-3 text-xs text-gray-500">
                Weekly insights on program management, business development, and execution discipline.
              </p>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}