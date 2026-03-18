// src/sections/Specialties.jsx
import { motion } from "framer-motion";
import ImageBlock from "../components/ImageBlock";
import Section from "../components/Section";
import Card from "../components/Card";
import { SPECIALTIES } from "../data/content";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function ItemRow({ children, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="flex items-start gap-2 text-sm text-gray-400"
    >
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white shadow-sm">
        <Check size={14} />
      </span>
      <span className="leading-relaxed">{children}</span>
    </motion.li>
  );
}

function SpecialtyCard({ s, idx }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="group relative h-full overflow-hidden border-gray-800 bg-jdk-dark/90 transition hover:-translate-y-1 hover:shadow-soft text-white">
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-jdk-cyan/10 blur-[80px] opacity-0 transition group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-jdk-purple/10 blur-[80px] opacity-0 transition group-hover:opacity-100" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <p className="text-base font-extrabold tracking-tight text-white">
              {s.title}
            </p>

            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-jdk-black border border-gray-800 text-white shadow-soft opacity-90 transition group-hover:opacity-100 group-hover:border-jdk-cyan/50">
              <ArrowUpRight size={16} className="text-jdk-cyan" />
            </span>
          </div>

          <ul className="mt-4 space-y-2">
            {s.items.map((it, i) => (
              <ItemRow key={it} delay={i * 0.04}>
                {it}
              </ItemRow>
            ))}
          </ul>

          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple transition-all duration-700 group-hover:w-[88%]" />
          </div>

          <p className="mt-2 text-xs font-bold text-gray-500">
            Delivered with cadence, governance, and measurable checkpoints.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Specialties() {
  return (
    <Section
      id="specialties"
      eyebrow="Specializes in"
      title="Capability areas"
      subtitle="Clear, practical support across program execution, strategy, finance, and proposals."
    >
      {/* Premium micro-strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-jdk-dark/50 px-4 py-2 text-xs font-extrabold text-gray-300 shadow-soft"
      >
        <Sparkles size={14} className="text-jdk-cyan" />
        Practical capability stacks built for real execution, not theory.
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="lg:col-span-8 grid gap-6 md:grid-cols-2"
        >
          {SPECIALTIES.map((s, idx) => (
            <SpecialtyCard key={s.title} s={s} idx={idx} />
          ))}
        </motion.div>

        {/* Right: Visual + Execution block */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="lg:col-span-4 space-y-6"
        >
          <motion.div variants={fadeUp} className="relative">
            <div className="pointer-events-none absolute -inset-6 bg-jdk-cyan/10 blur-[80px]" />
            <ImageBlock
              src="/images/jdk-tech-meeting-6.jpg"
              alt="Capability areas"
              heightClass="h-64"
              className="relative border-gray-800 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
              imgClassName="hover:scale-110"
              overlay
            />
            <div className="absolute bottom-3 left-3 rounded-full border border-gray-800 bg-jdk-black/70 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md">
              Capability snapshot
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-jdk-dark border border-gray-800 p-7 text-white shadow-soft">
              {/* glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-jdk-cyan/20 blur-[80px]" />

              <p className="inline-block rounded-full border border-jdk-cyan/30 bg-jdk-cyan/10 px-3 py-1 text-xs font-bold text-jdk-cyan">
                Execution-first
              </p>

              <h3 className="mt-4 text-xl font-extrabold tracking-tight">
                We build delivery systems, not just recommendations.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Structure, cadence, and control systems that keep programs aligned,
                accountable, and moving forward with measurable momentum.
              </p>

              <div className="my-6 h-px w-full bg-gray-800" />

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-400">
                  <span>Engagement readiness</span>
                  <span className="text-jdk-cyan">High</span>
                </div>

                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-jdk-cyan to-jdk-purple"
                    initial={{ width: "30%" }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}