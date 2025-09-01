"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-white px-6 max-w-6xl mx-auto text-center"
      >
        <HeroTitle />
        <HeroButtons />
      </motion.div>

      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-2xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-2xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-2xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-2xl" />
    </div>
  );
}
