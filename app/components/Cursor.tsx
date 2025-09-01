"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    // Add hover detection for interactive elements
    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;
      setHovered(target.closest("a, button") !== null);
    };
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHover);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-black bg-gradient-to-tr from-white/20 to-white/5 shadow-[0_0_10px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.1)] z-50"
        style={{
          x: mouse.x - 12,
          y: mouse.y - 12,
        }}
        animate={{
          x: mouse.x - 12,
          y: mouse.y - 12,
          scale: hovered ? 1.5 : 1,
          background: hovered
            ? "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%)"
            : "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%)",
          boxShadow: hovered
            ? "0 0 15px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.2)"
            : "0 0 10px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      />
    </AnimatePresence>
  );
}
