"use client";

import { motion } from "framer-motion";

export default function RomanticParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-rose-300/20 blur-3xl"
          style={{
            width: `${140 + i * 6}px`,
            height: `${140 + i * 6}px`,
            left: `${(i * 19) % 100}%`,
            top: `${(i * 27) % 100}%`,
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -35, 0],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: 14 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
