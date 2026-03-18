import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

export default function AgentFloat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [thread, setThread] = useState([
    { role: "agent", text: "Hi! I’m the virtual assistant. What can I help you with today?" },
  ]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const send = (e) => {
    e.preventDefault();
    const text = msg.trim();
    if (!text) return;

    setThread((t) => [...t, { role: "user", text }]);
    setMsg("");

    setTimeout(() => {
      setThread((t) => [
        ...t,
        { role: "agent", text: "Got it. Share your timeline and priority, and I’ll suggest next steps." },
      ]);
    }, 450);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="
          fixed bottom-40 right-5 z-[60]
          hidden sm:inline-flex
          items-center gap-3 rounded-full
          bg-gradient-to-r from-jdk-cyan to-jdk-purple
          px-5 py-3 text-sm font-extrabold text-white
          shadow-[0_15px_40px_rgba(213,0,249,0.40)]
          transition-all
          focus:outline-none focus:ring-2 focus:ring-jdk-cyan focus:ring-offset-2 focus:ring-offset-jdk-black
        "
        aria-label="Open virtual agent"
        title="Virtual Agent"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
          <Bot size={18} />
        </span>
        Virtual Agent
      </motion.button>

      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="
          fixed bottom-40 right-5 z-[60]
          inline-flex sm:hidden
          items-center justify-center rounded-full
          bg-gradient-to-r from-jdk-cyan to-jdk-purple
          p-4 text-white
          shadow-[0_15px_40px_rgba(213,0,249,0.40)]
          focus:outline-none focus:ring-2 focus:ring-jdk-cyan
        "
      >
        <Bot size={20} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="
                fixed bottom-40 right-5 z-[80]
                w-[360px] max-w-[calc(100vw-2.5rem)]
                overflow-hidden rounded-3xl border border-gray-800
                bg-jdk-dark shadow-2xl
              "
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between border-b border-gray-800 bg-jdk-black px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-2xl bg-jdk-cyan/10 text-jdk-cyan">
                    <Bot size={18} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-extrabold text-white">Virtual Agent</p>
                    <p className="text-xs font-semibold text-jdk-cyan">Typically replies instantly</p>
                  </div>
                </div>

                <button
                  className="grid h-9 w-9 place-items-center rounded-2xl border border-gray-800 bg-jdk-dark text-gray-400 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="max-h-[360px] h-[300px] space-y-3 overflow-auto px-4 py-4 flex flex-col">
                {thread.map((m, i) => (
                  <div
                    key={i}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-soft ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-jdk-cyan to-jdk-purple text-white"
                          : "bg-gray-800 text-gray-200 border border-gray-700"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={send} className="flex gap-2 border-t border-gray-800 bg-jdk-black p-3">
                <input
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full rounded-2xl border border-gray-700 bg-jdk-dark px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-jdk-cyan placeholder:text-gray-500"
                  placeholder="Type your message…"
                />
                <button
                  type="submit"
                  className="
                    inline-flex items-center justify-center
                    rounded-2xl bg-jdk-cyan px-3 py-2
                    text-jdk-black font-bold shadow-glow transition
                    hover:bg-opacity-90 hover:shadow-[0_0_15px_#00e5ff]
                    focus:outline-none focus:ring-2 focus:ring-jdk-cyan
                  "
                >
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}