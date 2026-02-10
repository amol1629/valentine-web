"use client";

import { ReactNode, useId } from "react";

type HeartCardProps = {
  children: ReactNode;
  size?: number;
  className?: string;
};

export default function HeartCard({
  children,
  size = 260, // 🔥 BIG heart
  className = "",
}: HeartCardProps) {
  const id = useId();

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="absolute inset-0"
      >
        <defs>
          <mask id={`heart-mask-${id}`}>
            <rect width="100%" height="100%" fill="black" />
            {/* Symmetric, full heart */}
            <path
              d="
                M100 185
                C100 185 18 125 18 72
                C18 38 48 22 76 38
                C92 48 100 68 100 68
                C100 68 108 48 124 38
                C152 22 182 38 182 72
                C182 125 100 185 100 185
              "
              fill="white"
            />
          </mask>
        </defs>

        <foreignObject
          width="100%"
          height="100%"
          mask={`url(#heart-mask-${id})`}
        >
          {/* Safe padding so text never clips */}
          <div className="w-full h-full p-6 box-border">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
