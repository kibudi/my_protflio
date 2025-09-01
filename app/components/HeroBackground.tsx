"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f111a] via-[#1a1f2a] to-[#0a84ff]" />

      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-40 pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(59, 130, 246, 0.4) 40%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
