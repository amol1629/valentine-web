"use client";

import { useEffect, useRef, useState } from "react";

type Heart = {
  id: number;
  left: number;
};

export default function GSAPHeartParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [mounted, setMounted] = useState(false);

  // Generate hearts only on client
  useEffect(() => {
    setMounted(true);

    const generatedHearts: Heart[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
    }));

    setHearts(generatedHearts);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let ctx: gsap.Context | undefined;

    const initAnimation = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      ctx = gsap.context(() => {
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
      }, containerRef);
    };

    initAnimation();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [mounted, hearts]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-20"
    >
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
