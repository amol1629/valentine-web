"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { valentineDays } from "@/data/valentineDays";
import { isUnlocked } from "@/lib/unlockLogic";
import HeartShape from "./HeartShape";

export default function StackedHeartCard() {
  const unlockedDays = valentineDays.filter((_, i) => isUnlocked(i));
  const currentIndex = unlockedDays.length - 1;
  const currentDay = unlockedDays[currentIndex];
  const prevDay = unlockedDays[currentIndex - 1];
  const nextDay = valentineDays[currentIndex + 1];
  const canGoNext = nextDay && isUnlocked(currentIndex + 1);

  if (!currentDay) return null;

  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* STACKED BACK HEARTS */}
      {[2, 1].map((i) => (
        <div
          key={i}
          className="absolute inset-0 scale-[0.95] opacity-30"
          style={{
            transform: `translate(${i * 10}px, ${i * 10}px)`,
          }}
        >
          <HeartShape>
            <div className="w-full h-full bg-pink-400/30" />
          </HeartShape>
        </div>
      ))}

      {/* MAIN HEART */}
      <motion.div
        className="relative w-full h-full cursor-pointer"
        whileHover={{ scale: 1.03 }}
      >
        <Link href={`/day/${currentDay.slug}`}>
          <HeartShape>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${currentDay.cardBgImage})` }}
            >
              <div className="absolute inset-0 bg-black/45" />
              <span
                className="relative z-10 text-2xl font-semibold px-6"
                style={{ color: currentDay.accentColor }}
              >
                {currentDay.title}
              </span>
            </div>
          </HeartShape>
        </Link>
      </motion.div>

      {/* PREVIOUS */}
      {prevDay && (
        <Link
          href={`/day/${prevDay.slug}`}
          className="absolute left-[-48px] text-white/80 hover:text-white"
        >
          <ChevronLeft size={32} />
        </Link>
      )}

      {/* NEXT */}
      {canGoNext && (
        <Link
          href={`/day/${nextDay.slug}`}
          className="absolute right-[-48px] text-white/80 hover:text-white"
        >
          <ChevronRight size={32} />
        </Link>
      )}
    </div>
  );
}
