import Services from "../sections/Services";
import Methodology from "../sections/Methodology";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, MousePointer2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-jdk-black overflow-x-hidden">
      {/* --- PAGE HERO --- */}
      <section className="relative flex min-h-[70vh] items-center justify-center pt-32 pb-20 px-6">
        {/* Background Sophistication */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,229,255,0.08),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(213,0,249,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-jdk-black opacity-40 mix-blend-multiply" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.2em] text-jdk-cyan uppercase">
              <Sparkles size={14} className="animate-pulse" /> Established 2009
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
              Structural <span className="bg-gradient-to-r from-jdk-cyan via-white to-jdk-purple bg-clip-text text-transparent">Excellence</span> <br />
              for Complex Programs
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
              Specializing in the integration of technological advancements into business management structures. We provide the governance and execution needed for successful outcomes.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/contact" 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-jdk-cyan to-jdk-purple px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(213,0,249,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Strategy Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <div className="flex items-center gap-3 px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest border border-white/5 rounded-2xl bg-white/[0.02]">
                <MousePointer2 size={16} className="text-jdk-cyan" /> Select a service below
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Visual Representation of structure */}
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-jdk-cyan/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-jdk-purple/10 animate-[spin_10s_linear_infinite]" />
              
              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-jdk-cyan/20 to-jdk-purple/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-white/5 transform rotate-45 translate-y-full group-hover:translate-y-minus-full transition-transform duration-1000" />
                    <Sparkles size={48} className="text-white opacity-80" />
                 </div>
              </div>

              {/* Orbital Points */}
              <div className="absolute top-0 left-1/2 -ml-2 h-4 w-4 rounded-full bg-jdk-cyan shadow-[0_0_15px_#00e5ff]" />
              <div className="absolute bottom-0 left-1/2 -ml-2 h-4 w-4 rounded-full bg-jdk-purple shadow-[0_0_15px_#d500f9]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <Services />

      {/* --- PROCESS SECTION --- */}
      <Methodology />

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-jdk-purple/10 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Architect <br />
            <span className="text-jdk-cyan">Your Next Success?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Leverage over a decade of program management and business strategy experience to drive your organization forward.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition-all hover:bg-jdk-cyan hover:scale-105"
          >
            Start a Conversation <ArrowRight size={22} />
          </Link>
          
          <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
             <div>
                <p className="text-2xl font-black text-white">30+</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
             </div>
             <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Execution Focus</p>
             </div>
             <div>
                <p className="text-2xl font-black text-white">98%</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">program recovery</p>
             </div>
             <div>
                <p className="text-2xl font-black text-white">SAP</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Integration</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

