import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BRAND } from "../data/content";
import LogoMark from "./LogoMark";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="
        group inline-flex items-center gap-2
        rounded-full border border-gray-800 bg-jdk-dark/80 px-4 py-2
        text-xs font-extrabold text-gray-300
        shadow-soft transition-all duration-300
        hover:-translate-y-0.5 hover:bg-white/5 hover:text-jdk-cyan
        focus:outline-none focus:ring-2 focus:ring-jdk-cyan
      "
      aria-label="Back to top"
    >
      Back to top
      <span className="grid h-6 w-6 place-items-center rounded-full bg-jdk-black text-white transition group-hover:bg-jdk-cyan/20">
        <ArrowUpRight size={14} className="text-jdk-cyan group-hover:text-white" />
      </span>
    </button>
  );
}

export default function Footer() {
  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Contact", "/contact"],
  ];
  
  const socials = [
    { icon: Linkedin, href: "#", color: "hover:text-jdk-cyan" },
    { icon: Twitter, href: "#", color: "hover:text-jdk-cyan" },
    { icon: Facebook, href: "#", color: "hover:text-jdk-purple" },
    { icon: Instagram, href: "#", color: "hover:text-jdk-orange" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-900 bg-jdk-black">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-jdk-cyan/10 blur-[100px]" />
        <div className="absolute -bottom-24 right-[-10rem] h-72 w-72 rounded-full bg-jdk-purple/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6">
        {/* top row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-3">
                <LogoMark />
              </div>
              <ScrollTop />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-400 max-w-sm">
              Business management consulting focused on execution, strategy, and measurable outcomes.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 bg-jdk-dark/50 
                    text-gray-400 transition-all duration-300
                    hover:-translate-y-1 hover:border-gray-500 hover:shadow-glow
                    ${s.color}
                  `}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeUp} className="md:justify-self-center">
            <p className="text-sm font-extrabold text-white">Quick Links</p>
            <div className="mt-4 grid gap-2 text-sm">
              {links.map(([t, h], i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.04 }}
                >
                  <Link
                    to={h}
                    className="
                      group inline-flex items-center justify-between
                      rounded-xl border border-transparent px-2 py-2
                      font-semibold text-gray-400 transition-all
                      hover:border-gray-800 hover:bg-white/5 hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-jdk-cyan
                    "
                  >
                    <span>{t}</span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:opacity-100 text-jdk-cyan ml-2"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="md:justify-self-end w-full max-w-xs">
            <p className="text-sm font-extrabold text-white">Contact</p>

            <div className="mt-4 grid gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-jdk-dark/50 p-4 shadow-soft">
                <Phone size={18} className="mt-0.5 text-jdk-cyan" />
                <div>
                  <p className="text-xs font-extrabold text-gray-500">Phone</p>
                  <p className="mt-1 text-sm font-extrabold text-white">{BRAND.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-jdk-dark/50 p-4 shadow-soft">
                <MapPin size={18} className="mt-0.5 text-jdk-cyan" />
                <div>
                  <p className="text-xs font-extrabold text-gray-500">Location</p>
                  <p className="mt-1 text-sm font-extrabold text-white">{BRAND.location}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="
                  group inline-flex items-center justify-between gap-3
                  rounded-2xl border border-gray-800 bg-gradient-to-r from-jdk-cyan/10 to-transparent p-4
                  text-white shadow-soft transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,229,255,0.15)] hover:border-jdk-cyan/50
                  focus:outline-none focus:ring-2 focus:ring-jdk-cyan
                "
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-jdk-cyan/20">
                    <Mail size={18} className="text-jdk-cyan" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold text-white/70">Get in touch</p>
                    <p className="mt-1 text-sm font-extrabold">Send a message</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-jdk-cyan transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-900 pt-6 sm:flex-row sm:items-center"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">
              Copyright © 2026 {BRAND.name} - All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Program Management", "Business Strategy", "Grants", "Federal Contracts"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-gray-800 bg-white/5 px-3 py-1 text-[11px] font-extrabold text-gray-400"
              >
                {x}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}