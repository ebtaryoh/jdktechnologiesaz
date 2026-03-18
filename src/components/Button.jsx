export default function Button({ as: Comp = "button", variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-jdk-cyan";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white hover:opacity-90 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
      : variant === "navy" || variant === "dark"
      ? "bg-gray-800 text-white hover:bg-gray-700 shadow-soft"
      : variant === "ghost"
      ? "bg-transparent text-gray-200 hover:text-white border-2 border-gray-700 hover:border-jdk-cyan hover:bg-white/5"
      : "bg-white/5 text-gray-200 hover:bg-white/10 border border-gray-800";

  return <Comp className={`${base} ${styles} ${className}`} {...props} />;
}