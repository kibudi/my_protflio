"use client";
import { motion } from "framer-motion";
import { GiCrystalBall } from "react-icons/gi";
export default function HeroSection() {
  return (
    <main className="relative flex flex-col justify-center items-center py-6 px-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="text-center max-w-6xl relative"
      >
        <h1 className="text-3xl md:text-5xl font-black mb-4">
          <span className="bg-gradient-to-r from-white/80 via-cyan-200 to-teal-200 bg-clip-text text-transparent">
            Web
          </span>
          <br />
          <span className="inline-flex items-center gap-2">
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-white/70 bg-clip-text text-transparent pl-10">
              Wizard
            </span>
            <GiCrystalBall className="text-cyan-300 text-4xl md:text-5xl" />
          </span>
        </h1>
        <p className="text-base md:text-lg text-white/70">
          Transforming ideas into{" "}
          <span className="font-bold text-cyan-300">Digital magic</span>
        </p>
      </motion.div>
    </main>
  );
}
