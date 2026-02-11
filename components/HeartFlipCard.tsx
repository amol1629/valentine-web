"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock } from "lucide-react";
import { getUnlockText } from "@/lib/unlockText";
import { DayCardProps } from "@/types/valentine";

export default function HeartFlipCard({ day, unlocked } : DayCardProps) {
  return (
    <div className="relative w-[260px] h-[260px] perspective-1000">
      {/* Back stacked hearts (depth) */}
      <div className="absolute inset-0 rounded-full bg-pink-500/10 translate-x-2 translate-y-2 blur-md" />
      <div className="absolute inset-0 rounded-full bg-pink-500/15 translate-x-1 translate-y-1 blur-sm" />

      {/* Main heart */}
      <motion.div
        whileHover={unlocked ? { rotateY: 180 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`relative w-full h-full preserve-3d
        rounded-full cursor-pointer
        ${unlocked ? "animate-heartbeat" : ""}`}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 backface-hidden
          rounded-full overflow-hidden
          shadow-2xl flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${day.cardBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />

          <span
            className="relative z-10 text-2xl font-semibold px-4"
            style={{
              color: day.accentColor,
              textShadow: "0 2px 10px rgba(0,0,0,0.85)",
            }}
          >
            {day.title}
          </span>

          {!unlocked && (
            <div className="absolute inset-0 bg-black/65
            flex flex-col items-center justify-center z-20">
              <Lock className="text-white mb-2" size={20} />
              <span className="text-xs text-white/80 text-center px-6">
                {getUnlockText(day.date)}
              </span>
            </div>
          )}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180
          rounded-full shadow-2xl
          bg-gradient-to-br from-rose-500 to-pink-600
          flex flex-col items-center justify-center
          text-center px-6"
        >
          <p className="text-white text-sm leading-relaxed mb-4">
            {day.importance}
          </p>

          {unlocked && (
            <Link
              href={`/day/${day.slug}`}
              className="text-white text-xs underline underline-offset-4"
            >
              Open this day 💖
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
