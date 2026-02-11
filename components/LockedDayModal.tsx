"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import LottieHeart from "./LottieHeart";
import { LockedDayModalProps } from "@/types/valentine";

export default function LockedDayModal({ open, onOpenChange }: LockedDayModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50
                bg-black/60 backdrop-blur-lg"
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className="fixed z-50 left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[92%] max-w-sm
                rounded-[2rem]
                p-8 text-center
                shadow-[0_40px_120px_rgba(0,0,0,0.55)]
                overflow-hidden"
              >
                {/* 🌈 Animated romantic background */}
                <motion.div
                  className="absolute inset-0 -z-10
                  bg-[radial-gradient(circle_at_top,rgba(255,182,193,0.45),transparent_60%),linear-gradient(135deg,#2a001f,#4a0d2a,#7b1e3c)]"
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* ✨ Soft glow border */}
                <div
                  className="absolute inset-0 rounded-[2rem]
                  pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,182,193,0.25), 0 0 60px rgba(255,105,135,0.25)",
                  }}
                />

                {/* Accessible title */}
                <Dialog.Title asChild>
                  <VisuallyHidden>
                    <h2>Locked Valentine Surprise</h2>
                  </VisuallyHidden>
                </Dialog.Title>

                {/* 💖 Heart animation */}
                <div className="flex justify-center mb-4">
                  <LottieHeart size={110} />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  Sorry Dips 🥺
                </h3>

                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  This surprise is still hiding its magic 💖
                  Just wait a little longer… it’ll be worth it ✨
                </p>

                {/* Button */}
                <Dialog.Close asChild>
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-2 px-7 py-2.5 rounded-full
                    bg-white/90 text-rose-700
                    font-medium shadow-lg
                    hover:bg-white transition"
                  >
                    Okay ❤️
                  </motion.button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
