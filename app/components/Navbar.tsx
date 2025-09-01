"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SidebarMenu from "./SidebarMenu";
import BackgroundEffects from "./BackgroundEffects";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "he" : "en");
  };

  return (
    <div className="relative h-auto overflow-hidden">
      <BackgroundEffects />
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="fixed top-8 left-8 z-40 flex gap-2">
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-4 rounded-xl bg-[rgba(15,17,26,0.8)] backdrop-blur-md border border-cyan-500 text-cyan-400 font-semibold shadow-lg hover:bg-[rgba(15,17,26,0.95)] hover:text-white transition-all duration-300"
          >
            {t("navbar.menu")}
          </button>
        )}
        <button
          onClick={toggleLanguage}
          className="p-4 rounded-xl bg-[rgba(15,17,26,0.8)] backdrop-blur-md border border-pink-500 text-pink-400 font-semibold shadow-lg hover:bg-[rgba(15,17,26,0.95)] hover:text-white transition-all duration-300"
        >
          {t("navbar.language")}
        </button>
      </div>
    </div>
  );
}
