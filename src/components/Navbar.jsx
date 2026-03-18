import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import LogoMark from "./LogoMark";
import { BRAND } from "../data/content";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const navIn = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const menuAnim = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      variants={navIn}
      initial="hidden"
      animate="show"
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all ${
        scrolled ? "border-jdk-dark/50 bg-jdk-black/80 shadow-glow" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        {/* Brand */}
        <Link to="/" className="group flex items-center">
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`
                  relative text-sm font-extrabold transition-colors duration-300
                  ${isActive ? "text-jdk-cyan" : "text-gray-300 hover:text-white"}
                  after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full
                  after:bg-gradient-to-r after:from-jdk-cyan after:to-jdk-purple 
                  after:transition-all after:duration-300 hover:after:w-full
                  ${isActive ? "after:w-full" : ""}
                `}
              >
                {l.label}
              </Link>
            );
          })}

          <Button as={Link} to="/contact" className="shadow-[0_0_20px_rgba(0,229,255,0.4)] rounded-full bg-gradient-to-r from-jdk-cyan via-jdk-purple to-jdk-orange text-white hover:opacity-90 border-none px-6">
            Get Started <ArrowRight size={16} />
          </Button>
        </nav>

        {/* Mobile trigger */}
        <button
          className="
            inline-flex items-center justify-center rounded-xl border border-gray-800
            bg-jdk-dark/80 p-2 text-gray-200 shadow-softer transition
            hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-jdk-cyan
            lg:hidden
          "
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuAnim}
          >
            {/* overlay backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* panel */}
            <div className="relative z-50">
              <div className="mx-auto max-w-6xl px-5 pb-5 sm:px-6">
                <div className="rounded-3xl border border-gray-800 bg-jdk-dark/95 p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col gap-2">
                    {links.map((l, i) => {
                      const isActive = location.pathname === l.href;
                      return (
                        <motion.div
                          key={l.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut", delay: i * 0.05 }}
                        >
                          <Link
                            to={l.href}
                            onClick={() => setOpen(false)}
                            className={`
                              block rounded-2xl px-4 py-3.5 text-base font-extrabold 
                              transition-all focus:outline-none focus:ring-2 focus:ring-jdk-cyan
                              ${isActive ? "bg-white/5 text-jdk-cyan" : "text-gray-200 hover:bg-white/5"}
                            `}
                          >
                            {l.label}
                          </Link>
                        </motion.div>
                      );
                    })}

                    <div className="mt-4 grid gap-3">
                      <Button
                        as={Link}
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="
                          rounded-2xl bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white border-none py-4 text-base font-bold
                          transition-all duration-300
                          hover:shadow-[0_10px_30px_rgba(213,0,249,0.4)]
                        "
                      >
                        Get Started <ArrowRight size={18} />
                      </Button>

                      <div className="flex items-center justify-between rounded-2xl border border-gray-800 bg-jdk-black px-5 py-4 mt-2">
                        <div className="flex items-center gap-2 text-sm font-extrabold text-gray-400">
                          <Phone size={16} className="text-jdk-orange" />
                          <span>Call Us</span>
                        </div>
                        <span className="text-sm font-extrabold text-white">{BRAND.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}