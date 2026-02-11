"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { valentineDays } from "@/data/valentineDays";
import { isUnlocked } from "@/lib/unlockLogic";
import DayCard from "@/components/DayCard";
import GSAPHeartParticles from "@/components/GSAPHeartParticles";
import HeartFlowCanvas from "@/components/HeartFlowCanvas";

export default function Home() {
	return (
		<main className="py-20 relative min-h-screen flex items-center justify-center overflow-hidden">

			{/* Background image */}
			<Image
				src="https://t3.ftcdn.net/jpg/07/03/66/40/360_F_703664087_PbvY3jjPE58qANjsoNyeAlU0niMicVRf.jpg"
				fill
				className="object-cover"
				alt="bg"
				priority
			/>

			{/* Dark + blur overlay */}
			<div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0" />

			{/* Ambient effects (NON interactive) */}
			<GSAPHeartParticles />
			<HeartFlowCanvas />

			{/* Content */}
			<div className="relative z-30 w-[92%] max-w-6xl">

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: -24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-center text-5xl md:text-6xl font-semibold text-pink-300 mb-2"
				>
					Valentine Week
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="text-center text-white/80 mb-16 text-lg"
				>
					For{" "}
					<motion.span
						animate={{ scale: [1, 1.06, 1] }}
						transition={{ repeat: Infinity, duration: 2 }}
						className="text-pink-300 font-medium"
					>
						Dipali ❤️
					</motion.span>
				</motion.p>

				{/* ===== MODERN GRID (INTENTIONAL, NOT BASIC) ===== */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.12,
							},
						},
					}}
					className="
            grid
            grid-cols-1
            sm:grid-cols-3
            lg:grid-cols-4
            gap-12
          "
				>
					{valentineDays.map((day, i) => (
						<motion.div
							key={day.slug}
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<DayCard
								day={day}
								unlocked={isUnlocked(i)}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</main>
	);
}
