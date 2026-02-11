"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import DayCard from "./DayCard";

export default function DayCarousel({ days, isUnlocked }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Container */}
        <div className="flex gap-8 px-4 md:px-0">
          {days.map((day, i) => (
            <motion.div
              key={day.slug}
              className="flex-[0_0_85%] md:flex-[0_0_32%]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
            >
              <DayCard day={day} unlocked={isUnlocked(i)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient edges (premium touch) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/60 to-transparent" />
    </div>
  );
}
