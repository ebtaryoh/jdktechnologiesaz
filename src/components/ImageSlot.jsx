import { motion } from "framer-motion";

export default function ImageSlot({ label = "Visual", className = "" }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-softer ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#070e24_0%,#0e7490_40%,#070e24_100%)] bg-[length:200%_200%] animate-shimmer opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
        <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-teal-300/20 blur-xl" />
      </div>
      <div className="relative p-5">
        <p className="text-xs font-bold tracking-wide text-white/80">IMAGE SLOT</p>
        <p className="mt-2 text-base font-extrabold text-white">{label}</p>
        <p className="mt-2 text-sm text-white/80">
          Replace this slot with a real image later (ex: /public/images/your-image.jpg).
        </p>
      </div>
    </motion.div>
  );
}