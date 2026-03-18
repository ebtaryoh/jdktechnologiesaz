// src/sections/About.jsx
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { MISSION, BRAND } from "../data/content";
import { ArrowRight, ShieldCheck, Target, Workflow } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay }}
      className="group rounded-2xl border border-gray-800 bg-jdk-dark/80 p-4 shadow-soft backdrop-blur-md transition hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-jdk-cyan/10 blur-md opacity-0 transition group-hover:opacity-100" />
          <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-jdk-black text-white border border-gray-800 transition group-hover:border-jdk-cyan/50">
            <Icon size={18} className="text-jdk-cyan" />
          </div>
        </div>

        <div>
          <p className="text-sm font-extrabold text-white">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-400">{desc}</p>
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple transition group-hover:w-[86%]" />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Who we are"
      title={MISSION.title}
      subtitle={MISSION.text}
      className="bg-jdk-black"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT: Main content */}
        <Card className="relative overflow-hidden lg:col-span-8 bg-jdk-dark/60 text-white">
          {/* soft decor */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-jdk-cyan/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-jdk-purple/10 blur-[80px]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-jdk-cyan/30 bg-jdk-cyan/10 px-3 py-1 text-xs font-extrabold text-jdk-cyan"
            >
              Built for complexity
            </motion.p>

            <motion.h3
              variants={fadeUp}
              className="mt-4 text-xl font-extrabold tracking-tight text-white sm:text-2xl"
            >
              Structure, clarity, and execution discipline for organizations that can’t afford drift.
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base"
            >
              We help organizations move from complexity to clarity using strong program governance, strategic planning,
              and practical execution. Whether you’re improving internal operations or navigating federal contracting,
              we focus on alignment and measurable outcomes.
            </motion.p>

            <motion.div variants={stagger} className="mt-6 grid gap-4 sm:grid-cols-3">
              <FeatureCard
                icon={ShieldCheck}
                title="Governance"
                desc="Compliance-ready structure and decision clarity."
              />
              <FeatureCard
                icon={Workflow}
                title="Execution"
                desc="Cadence, accountability, and delivery reliability."
              />
              <FeatureCard
                icon={Target}
                title="Outcomes"
                desc="KPIs that make progress visible and measurable."
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#contact" className="
                  bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white border-none
                  transition-all duration-300
                  hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(213,0,249,0.35)]
                ">
                Get Started <ArrowRight size={16} />
              </Button>
             <Button
               as="a"
               href="#methodology"
               variant="ghost"
               className="
                 rounded-full px-6 py-3 font-extrabold
                 border border-gray-800
                 bg-jdk-black text-white hover:text-jdk-cyan
                 transition-all duration-300
                 hover:bg-gray-800
               "
             >
               View Methodology
             </Button>
            </motion.div>
          </motion.div>
        </Card>

        {/* RIGHT: Image + At a glance */}
        <div className="space-y-6 lg:col-span-4">
          {/* Image block */}
          <Card className="p-0 overflow-hidden bg-jdk-dark/80">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Frame + glow */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-gray-800" />
              <div className="pointer-events-none absolute -inset-8 bg-jdk-cyan/10 blur-[80px]" />

              <motion.img
                src="/images/jdk-tech-meeting-5.jpg"
                alt="About JDK Technologies"
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

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-jdk-black/80 via-transparent to-transparent" />

              {/* label */}
              <div className="absolute bottom-3 left-3 rounded-full border border-gray-700 bg-jdk-black/70 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md">
                Strategy • PMO • Grants
              </div>
            </motion.div>
          </Card>

          {/* At a glance */}
          <Card className="h-full bg-jdk-dark/80">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.p variants={fadeUp} className="text-sm font-extrabold text-white">
                At a glance
              </motion.p>

              <motion.div variants={stagger} className="mt-4 grid gap-3">
                {[
                  { label: "Company", value: BRAND.name },
                  { label: "Location", value: BRAND.location },
                  { label: "Phone", value: BRAND.phone },
                  { label: "Positioning", value: BRAND.tagline },
                ].map((row) => (
                  <motion.div key={row.label} variants={fadeUp}>
                    <div className="rounded-2xl border border-gray-800 bg-jdk-black p-4 transition hover:-translate-y-0.5 hover:shadow-soft">
                      <p className="text-xs font-extrabold text-gray-500">{row.label}</p>
                      <p className="mt-1 text-sm font-extrabold text-white break-words">{row.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Card>
        </div>
      </div>
    </Section>
  );
}