"use client";

import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        <Hero />
      </main>
    </>
  );
}
