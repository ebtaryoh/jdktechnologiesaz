// src/components/WhatsAppFloat.jsx
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "../data/content";

export default function WhatsAppFloat() {
  const href = BRAND.whatsappNumber
    ? `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.whatsappText)}`
    : `https://wa.me/?text=${encodeURIComponent(BRAND.whatsappText)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
      title="Message us on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-24 right-5 z-[60]
        inline-flex items-center gap-3
        rounded-full
        bg-gradient-to-r from-green-600 to-green-700
        px-5 py-3
        text-sm font-extrabold text-white
        shadow-[0_15px_40px_rgba(22,163,74,0.35)]
        transition-all duration-300
        hover:shadow-[0_18px_50px_rgba(22,163,74,0.55)]
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-jdk-black
      "
    >
      {/* Icon circle */}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
        <MessageCircle size={18} className="text-white" />
      </span>

      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}