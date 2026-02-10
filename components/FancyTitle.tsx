"use client";

import { motion } from "framer-motion";

export default function FancyTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center text-4xl md:text-6xl font-semibold mb-12"
    >
      <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-500
      bg-clip-text text-transparent">
        Valentine Week
      </span>{" "}
      <span className="text-rose-400">❤</span>
    </motion.h1>
  );
}
