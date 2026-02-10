"use client";

import Lottie from "lottie-react";
import heartAnim from "@/animations/Heart.json";

export default function LottieHeart({ size = 120 }) {
  return (
    <div style={{ width: size }}>
      <Lottie animationData={heartAnim} loop autoplay />
    </div>
  );
}
