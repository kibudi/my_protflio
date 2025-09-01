"use client";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import BackgroundEffects from "./BackgroundEffects";
import HeroSection from "./HeroSection";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-auto overflow-hidden">
      <BackgroundEffects />
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HeroSection />
      {!isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-8 left-8 z-40 p-4 rounded-xl bg-[rgba(15,17,26,0.8)] backdrop-blur-md border border-cyan-500 text-cyan-400 font-semibold shadow-lg hover:bg-[rgba(15,17,26,0.95)] hover:text-white transition-all duration-300"
        >
          Open Menu
        </button>
      )}
    </div>
  );
}
