import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { HERO } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const imageFloat = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-jdk-black pt-10 pb-10 lg:py-0">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-jdk-black z-0" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-jdk-cyan/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[0%] w-[40%] h-[50%] rounded-full bg-jdk-purple/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-jdk-orange/15 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-left max-w-2xl"
          >


            <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              <span className="block mb-2">JDK Technologies LLC</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jdk-cyan via-jdk-purple to-jdk-orange animate-shimmer bg-[length:200%_auto] block py-2">
                Premier Business Consulting Firm
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 sm:mt-6 text-base md:text-lg text-gray-400 leading-relaxed font-medium">
              {HERO.subhead}
            </motion.p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
              <Button
                as={Link}
                to="/services"
                className="
                  group relative flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white
                  bg-gradient-to-r from-jdk-cyan via-jdk-purple to-jdk-orange
                  hover:shadow-[0_0_40px_rgba(213,0,249,0.5)] transition-all duration-300 transform hover:-translate-y-1
                  border-none overflow-hidden w-full sm:w-auto
                "
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                as={Link}
                to="/work"
                variant="ghost"
                className="
                  rounded-full px-8 py-4 font-bold text-gray-100 border-2 border-gray-700 bg-transparent
                  hover:border-jdk-cyan hover:text-jdk-cyan hover:bg-jdk-cyan/10 transition-all duration-300 w-full sm:w-auto
                "
              >
                View Our Work
              </Button>
            </div>

            <motion.div variants={item} className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800 flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-jdk-cyan shadow-[0_0_10px_#00e5ff]" />
                Woman-Owned Business
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-jdk-purple shadow-[0_0_10px_#d500f9]" />
                Established 2009
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-jdk-orange shadow-[0_0_10px_#ff9100]" />
                Strategy & Grants
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Feature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-jdk-cyan/20 to-jdk-purple/20 rounded-full blur-[100px] -z-10" />
            <motion.img
              variants={imageFloat}
              animate="animate"
              src="/images/puzzle.png"
              alt="Glowing abstract puzzle pieces"
              className="w-full h-auto max-w-[600px] mx-auto drop-shadow-[0_20px_50px_rgba(213,0,249,0.3)] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}