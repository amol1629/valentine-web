"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  opacity: number;
  type: "heart" | "text";
};

export default function HeartFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = Array.from({ length: 45 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 10,
      speed: 0.4 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: 0.25 + Math.random() * 0.35,
      type: i % 8 === 0 ? "text" : "heart", // Dipali appears occasionally
    }));

    // ✅ Proper heart shape (parametric equation)
    const drawHeart = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.02) {
        const xt =
          size *
          16 *
          Math.pow(Math.sin(t), 3);
        const yt =
          -size *
          (13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t));
        ctx.lineTo(x + xt / 16, y + yt / 16);
      }
      ctx.closePath();
      ctx.fill();
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;

        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }

        if (p.type === "heart") {
          ctx.fillStyle = `rgba(255, 90, 130, ${p.opacity})`;
          drawHeart(p.x, p.y, p.size);
        } else {
          // 💖 Dipali text
          ctx.font = `${p.size + 6}px "Georgia", serif`;
          ctx.fillStyle = `rgba(255, 160, 180, ${p.opacity})`;
          ctx.fillText("Dipali", p.x, p.y);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
}
