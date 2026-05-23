// src/sections/CaseStudies.jsx
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../data/content";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

function Tag({ children }) {
  return (
    <span className="rounded-full border border-gray-800 bg-jdk-black px-3 py-1 text-xs font-extrabold text-gray-300 transition hover:border-jdk-cyan/50 hover:text-jdk-cyan">
      {children}
    </span>
  );
}

function CaseCard({ cs, idx }) {
  return (
    <motion.div variants={fadeUp}>
      <Card className="group relative h-full overflow-hidden border-gray-800 bg-jdk-dark/90 p-0 shadow-soft transition-all duration-300 hover:-translate-y-1">
        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-jdk-cyan/10 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-jdk-purple/10 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Image */}
        <div className="relative overflow-hidden">
          <motion.img
            src="/images/jdk-tech-meeting.jpg"
            alt={cs.title}
            className="h-52 w-full object-cover"
            loading="lazy"
            initial={{ scale: 1.03 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const div = document.createElement("div");
                div.className =
                  "grid h-52 place-items-center bg-jdk-black text-white text-sm font-extrabold";
                div.innerText =
                  "Image not found. Check: public/images/jdk-tech-meeting.jpg";
                parent.appendChild(div);
              }
            }}
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-jdk-black/90 via-jdk-black/20 to-transparent" />

          {/* Top chip */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-jdk-black/70 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md shadow-soft">
            <Sparkles size={14} className="text-jdk-cyan" />
            Case Study {idx + 1}
          </div>

          {/* Industry badge */}
          <div className="absolute bottom-4 left-4 rounded-full border border-jdk-cyan/30 bg-jdk-cyan/10 px-3 py-1 text-xs font-extrabold text-jdk-cyan backdrop-blur-sm">
            {cs.industry}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex items-start justify-between gap-4">
            <p className="text-lg font-extrabold tracking-tight text-white">
              {cs.title}
            </p>

            <motion.span
              className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-jdk-black border border-gray-800 text-white shadow-soft transition-colors group-hover:border-jdk-cyan/50"
              whileHover={{ rotate: 8 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight size={16} className="text-jdk-cyan" />
            </motion.span>
          </div>

          <div className="mt-4 space-y-4 text-sm text-gray-400">
            <div>
              <p className="text-xs font-extrabold tracking-wider text-white">
                CHALLENGE
              </p>
              <p className="mt-1 leading-relaxed">{cs.challenge}</p>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-wider text-white">
                APPROACH
              </p>
              <p className="mt-1 leading-relaxed">{cs.approach}</p>
            </div>

            <div>
              <p className="text-xs font-extrabold tracking-wider text-jdk-cyan">
                OUTCOME
              </p>
              <p className="mt-1 leading-relaxed text-white drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]">{cs.outcome}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* CTA (Colored button) */}
          <div className="mt-6">
            <Button
              as={Link}
              to="/contact"
              className="
                w-full
                rounded-xl
                bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white border-none
                transition-all duration-300
                hover:opacity-90
                hover:-translate-y-0.5
                hover:shadow-[0_14px_40px_rgba(213,0,249,0.35)]
              "
            >
              Discuss a similar project <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="Proof that structure creates momentum"
      subtitle="Examples of how we bring clarity, governance, and execution discipline to complex initiatives."
      className="bg-jdk-black"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {CASE_STUDIES.map((cs, idx) => (
          <CaseCard key={cs.title} cs={cs} idx={idx} />
        ))}
      </motion.div>
    </Section>
  );
}