import {motion} from "framer-motion";

export default function ImageBlock({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlay = true,
  heightClass = "h-56",
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-softer ${heightClass} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition duration-700 hover:scale-105 ${imgClassName}`}
        loading="lazy"
      />
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
      )}
    </motion.div>
  );
}
