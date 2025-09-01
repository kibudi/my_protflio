"use client";

import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function HeroTitle() {
  const { t } = useTranslation();
  return (
    <motion.h1
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
    >
      <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
        {t("hero.name")}
      </span>
      <br />
      <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        {t("hero.role")}
      </span>
    </motion.h1>
  );
}
