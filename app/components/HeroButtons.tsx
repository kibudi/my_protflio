"use client";
import { motion} from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { GiGlobe, GiMagicLamp, GiSpellBook } from "react-icons/gi";

function HeroButtons() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 px-10 py-5
                 bg-[rgba(20,18,40,0.7)] backdrop-blur-md border border-violet-500
                 text-white text-lg font-bold rounded-2xl shadow-lg 
                 hover:bg-[rgba(30,25,60,0.85)] hover:shadow-violet-400/40
                 transition-all duration-300 relative overflow-hidden"
        >
          <GiGlobe
            className="group-hover:animate-bounce text-violet-400"
            size={40}
          />
          {t("hero.buttons.explore")}
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-10 py-5
                 bg-[rgba(15,20,30,0.7)] backdrop-blur-md border border-cyan-400
                 text-white text-lg font-bold rounded-2xl shadow-lg
                 hover:bg-[rgba(20,30,40,0.85)] hover:shadow-cyan-400/40
                 transition-all duration-300 relative overflow-hidden"
        >
          <GiMagicLamp
            className="group-hover:animate-spin text-cyan-400"
            size={40}
          />
          {t("hero.buttons.magic")}
        </Link>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <button
          className="group inline-flex items-center gap-3 px-10 py-5
                 bg-[rgba(30,20,10,0.7)] backdrop-blur-md border border-amber-400
                 text-white text-lg font-bold rounded-2xl shadow-lg
                 hover:bg-[rgba(40,25,15,0.85)] hover:shadow-amber-400/40
                 transition-all duration-300 relative overflow-hidden"
        >
          <GiSpellBook
            className="group-hover:animate-bounce text-amber-400"
            size={40}
          />
          {t("hero.buttons.resume")}
        </button>
      </motion.div>
    </div>
  );
}

export default HeroButtons;
