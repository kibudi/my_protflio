"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f111a] via-[#1a1f2a] to-[#0a84ff]" />

      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(34,197,94,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(96,165,250,0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0"
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-30"
        animate={{ x: mousePos.x - 192, y: mousePos.y - 192 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
