"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

type Heart = {
  id: number;
  left: number;
};

export default function GSAPHeartParticles() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [mounted, setMounted] = useState(false);

  // Generate random positions ONLY on client
  useEffect(() => {
    setMounted(true);

    const generatedHearts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
    }));

    setHearts(generatedHearts);
  }, []);

  // GSAP animation AFTER DOM exists
  useEffect(() => {
    if (!mounted) return;

    hearts.forEach((heart) => {
      gsap.fromTo(
        `.gsap-heart-${heart.id}`,
        {
          y: 200,
          opacity: 0,
          scale: 0.6,
        },
        {
          y: -400,
          opacity: 1,
          scale: 1,
          duration: gsap.utils.random(7, 11),
          repeat: -1,
          delay: gsap.utils.random(0, 5),
          ease: "power1.inOut",
        }
      );
    });
  }, [mounted, hearts]);

  // 🚫 Avoid rendering anything until client mount
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`gsap-heart-${heart.id} absolute text-pink-400/40 text-xl`}
          style={{
            left: `${heart.left}%`,
            bottom: "-20%",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
