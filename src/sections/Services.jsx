// src/sections/Services.jsx
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { SERVICES } from "../data/content";
import {
  Briefcase,
  Layers,
  FileSearch,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const icons = [Briefcase, Layers, FileSearch, ShieldCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ServiceCard({ s, idx }) {
  const Icon = icons[idx] || Briefcase;

  return (
    <motion.div variants={fadeUp} className="group h-full">
      <Card className="relative h-full overflow-hidden border-white/5 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-jdk-cyan/20 via-transparent to-jdk-purple/20" />
        </div>

        {/* Decorative Background Glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-jdk-cyan/5 blur-[80px] transition-all duration-700 group-hover:bg-jdk-cyan/10" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-jdk-purple/5 blur-[80px] transition-all duration-700 group-hover:bg-jdk-purple/10" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header Area */}
          <div className="mb-8 flex items-center justify-between">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-jdk-cyan/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-jdk-black/40 border border-white/10 text-jdk-cyan shadow-xl group-hover:border-jdk-cyan/50 group-hover:text-white transition-all duration-500">
                <Icon size={28} strokeWidth={1.5} />
              </div>
            </div>
            <span className="text-4xl font-black text-white/5 transition-colors duration-500 group-hover:text-white/10">
              0{idx + 1}
            </span>
          </div>

          {/* Content Area */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-jdk-cyan transition-colors">
              {s.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              {s.desc}
            </p>
            
            {/* Features List */}
            <ul className="space-y-3">
              {s.features?.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-xs font-medium text-gray-500 transition-colors group-hover:text-gray-300">
                  <CheckCircle2 size={14} className="text-jdk-purple shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer to push button down */}
          <div className="mt-auto pt-4">
            <Button
              as="a"
              href="#contact"
              variant="ghost"
              className="w-full group/btn relative overflow-hidden transition-all duration-300 hover:border-jdk-cyan/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Consult on {s.title.split(' ')[0]} <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Solutions Architected for Success"
      title={
        <>
          Services <span className="bg-gradient-to-r from-jdk-cyan to-jdk-purple bg-clip-text text-transparent">Engineered</span> for Execution
        </>
      }
      subtitle="For nearly two decades, we provide structural consulting that bridges the gap between high-level strategy and ground-level results."
    >
      {/* Visual background element */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-jdk-cyan/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {SERVICES.map((s, idx) => (
          <ServiceCard key={s.title} s={s} idx={idx} />
        ))}
      </motion.div>
    </Section>
  );
}