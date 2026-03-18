// src/sections/Methodology.jsx
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { METHODOLOGY } from "../data/content";
import { ArrowRight, ClipboardCheck, Gauge, Layers, Shield, Sparkles } from "lucide-react";

const icons = [Layers, Shield, ClipboardCheck, Gauge];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

function StepCard({ m, idx }) {
  const Icon = icons[idx] || Layers;

  return (
    <motion.div variants={fadeUp}>
      <Card className="group relative h-full overflow-hidden border-gray-800 bg-jdk-dark/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-jdk-cyan/10 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-jdk-purple/10 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start gap-4">
          {/* Icon */}
          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-2xl bg-jdk-cyan/20 blur-md opacity-0 transition group-hover:opacity-100" />
            <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-gray-800 bg-jdk-black">
              <Icon size={18} className="text-jdk-cyan" />
            </div>
          </div>

          {/* Copy */}
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-jdk-cyan">
              Step {idx + 1}
            </p>
            <p className="mt-1 text-base font-extrabold tracking-tight text-white">
              {m.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{m.desc}</p>

            {/* micro bar */}
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple transition-all duration-700 group-hover:w-[88%]" />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Methodology() {
  return (
    <Section
      id="methodology"
      eyebrow="The methodology"
      title="How we deliver value"
      subtitle="A structured consulting approach that is customized, measurable, and execution-focused."
    >
      {/* Header strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-jdk-dark/50 px-4 py-2 text-xs font-extrabold text-gray-300 shadow-soft"
      >
        <Sparkles size={14} className="text-jdk-cyan" />
        A repeatable process with flexibility for your context.
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {METHODOLOGY.map((m, idx) => (
          <StepCard key={m.title} m={m} idx={idx} />
        ))}
      </motion.div>

      {/* CTA Panel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mt-10"
      >
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-jdk-dark p-7 text-white shadow-soft">
          {/* Glow accents */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-jdk-cyan/15 blur-[80px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-jdk-purple/15 blur-[80px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold text-jdk-cyan">Ready to start?</p>
              <p className="mt-2 text-lg font-extrabold tracking-tight">
                Let’s build a structured plan for your next milestone.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Schedule a consultation and we’ll map the path from current state to execution with clear checkpoints.
              </p>

              {/* tiny trust line */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-gray-400">
                <span className="rounded-full border border-gray-800 bg-jdk-black/50 px-3 py-1">Clear scope</span>
                <span className="rounded-full border border-gray-800 bg-jdk-black/50 px-3 py-1">Cadence & control</span>
                <span className="rounded-full border border-gray-800 bg-jdk-black/50 px-3 py-1">Measurable outcomes</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Colored primary */}
              <Button
                as="a"
                href="#contact"
                className="
                  rounded-full
                  bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white border-none
                  transition-all duration-300
                  hover:opacity-90
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_40px_rgba(213,0,249,0.35)]
                "
              >
                Book Consultation <ArrowRight size={16} />
              </Button>

              {/* Secondary */}
              <Button
                as="a"
                href="#case-studies"
                variant="ghost"
                className="
                  rounded-full
                  border-gray-800 bg-jdk-black text-white hover:text-jdk-cyan
                  hover:bg-gray-800
                  transition-all duration-300
                "
              >
                View Work
              </Button>
            </div>
          </div>

          {/* Bottom progress */}
          <div className="relative mt-6">
            <div className="flex items-center justify-between text-xs font-bold text-gray-400">
              <span>From current state → execution</span>
              <span className="text-jdk-cyan">Structured delivery</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple"
                initial={{ width: "28%" }}
                whileInView={{ width: "82%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}