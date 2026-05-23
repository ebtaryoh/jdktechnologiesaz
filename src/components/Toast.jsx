import { useEffect } from "react";
import { X, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Toast notification component.
 * - "success" renders as a fixed centered overlay that auto-dismisses after 4 s.
 * - "error" / "loading" render inline (no overlay).
 * Props:
 *  - type: "success" | "error" | "loading"
 *  - message: string
 *  - onClose: () => void
 */
export default function Toast({ type, message, onClose }) {
  // Auto-dismiss success toasts after 4 seconds
  useEffect(() => {
    if (type === "success") {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [type, onClose]);

  if (type === "success") {
    return (
      <AnimatePresence>
        {/* Backdrop */}
        <motion.div
          key="toast-backdrop"
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Blur overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

          {/* Card */}
          <motion.div
            key="toast-card"
            className="relative z-10 mx-4 flex max-w-md flex-col items-center gap-4 rounded-3xl border border-jdk-cyan/30 bg-jdk-dark/90 p-8 text-center shadow-[0_0_60px_rgba(0,229,255,0.15)] backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-jdk-cyan/10 ring-2 ring-jdk-cyan/30">
              <CheckCircle2 size={36} className="text-jdk-cyan" />
            </div>

            <div>
              <p className="text-lg font-extrabold text-white">Message Sent!</p>
              <p className="mt-1 text-sm text-gray-400">{message}</p>
            </div>

            {/* Progress bar */}
            <div className="w-full overflow-hidden rounded-full bg-white/10 h-1">
              <motion.div
                className="h-full rounded-full bg-jdk-cyan"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={14} />
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Inline toast for error / loading
  const colors = {
    error: "bg-red-500/10 border-red-500/30 text-red-500",
    loading: "bg-gray-500/10 border-gray-500/30 text-gray-400",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={type + message}
        className={`flex items-start gap-2 rounded-2xl border p-4 text-sm font-bold ${colors[type] ?? ""}`}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.95 }}
        transition={{ duration: 0.25 }}
      >
        <AlertTriangle size={18} className="mt-0.5 shrink-0" />
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
