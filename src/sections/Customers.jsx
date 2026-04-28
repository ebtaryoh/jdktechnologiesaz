// src/sections/Customers.jsx
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import { CUSTOMERS } from "../data/content";
import { Building2, Landmark, ArrowUpRight, Globe2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function ReachPill({ children }) {
  return (
    <span className="rounded-full border border-gray-800 bg-jdk-black px-3 py-1 text-xs font-extrabold text-gray-300">
      {children}
    </span>
  );
}

function CustomerCard({ c, idx }) {
  const Icon = idx === 0 ? Building2 : Landmark;

  return (
    <motion.div variants={fadeUp}>
      <Card className="group relative h-full overflow-hidden border-gray-800 bg-jdk-dark/90 transition hover:-translate-y-1 hover:shadow-soft">
        {/* subtle glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-jdk-cyan/10 blur-[80px] opacity-0 transition group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-jdk-purple/10 blur-[80px] opacity-0 transition group-hover:opacity-100" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-lg font-extrabold tracking-tight text-white">{c.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{c.desc}</p>
            </div>

            <div className="relative shrink-0">
              <div className="absolute -inset-2 rounded-2xl bg-jdk-cyan/10 blur-md opacity-0 transition group-hover:opacity-100" />
              <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-jdk-black text-white shadow-soft group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-shadow">
                <Icon size={18} className="text-jdk-cyan" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple transition-all duration-700 group-hover:w-[90%]" />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs font-bold text-gray-500">Alignment → Execution → Outcomes</p>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-jdk-cyan opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Customers() {
  return (
    <Section
      id="customers"
      eyebrow="Who we serve"
      title="Customers"
      subtitle="Support for nonprofits, commercial organizations, and government agencies with a focus on alignment and results."
      className="bg-jdk-dark"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-6 lg:grid-cols-12"
      >
        {/* Left column: image + reach */}
        <motion.div variants={fadeUp} className="lg:col-span-4 space-y-6">
          <Card className="relative overflow-hidden p-0">
            {/* Image (use the one you specified) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="pointer-events-none absolute -inset-10 bg-jdk-cyan/10 blur-[80px]" />
              <motion.img
                src="/images/jdk-tech-meeting-5.jpg"
                alt="Clients and partners"
                className="h-64 w-full object-cover"
                loading="lazy"
                initial={{ scale: 1.03 }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const div = document.createElement("div");
                    div.className =
                      "grid h-64 place-items-center bg-jdk-black text-white text-sm font-extrabold";
                    div.innerText =
                      "Image not found. Check: public/images/jdk-tech-meeting-5.jpg";
                    parent.appendChild(div);
                  }
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-jdk-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-jdk-black/70 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md">
                <Globe2 size={14} className="text-jdk-cyan" />
                Clients & Partners
              </div>
            </motion.div>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-jdk-cyan/15 blur-[80px]" />
            <p className="text-sm font-extrabold text-white">Reach</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Engagements spanning multiple states and international locations, built on repeatable delivery standards.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["California", "New Mexico", "Colorado", "Arizona", "South Carolina", "Maryland"].map((x, i) => (
                <motion.span
                  key={x}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.04 }}
                >
                  <ReachPill>{x}</ReachPill>
                </motion.span>
              ))}
            </div>

            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple"
                initial={{ width: "35%" }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>

            <p className="mt-2 text-xs font-bold text-gray-500">Delivery standards that scale across regions.</p>
          </Card>
        </motion.div>

        {/* Right column: customer cards */}
        <motion.div variants={stagger} className="lg:col-span-8 grid gap-6 md:grid-cols-2">
          {CUSTOMERS.map((c, idx) => (
            <CustomerCard key={c.title} c={c} idx={idx} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}