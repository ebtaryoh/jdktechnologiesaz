import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Simple toast/alert component used in the Contact form.
 * Props:
 *  - type: "success" | "error" | "loading"
 *  - message: string
 *  - onClose: () => void
 */
export default function Toast({ type, message, onClose }) {
  const colors = {
    success: "bg-jdk-cyan/10 border-jdk-cyan/30 text-jdk-cyan",
    error: "bg-red-500/10 border-red-500/30 text-red-500",
    loading: "bg-gray-500/10 border-gray-500/30 text-gray-500",
  };
  const iconMap = {
    success: "✅",
    error: "⚠️",
    loading: "⏳",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type + message}
        className={`flex items-start gap-2 rounded-2xl border p-4 text-sm font-bold ${colors[type]}`}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <span className="text-lg">{iconMap[type]}</span>
        <span className="flex-1">{message}</span>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-full p-1 hover:bg-white/10"
        >
          <X size={14} className="text-current" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
