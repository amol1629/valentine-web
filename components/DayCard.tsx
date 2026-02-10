"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock } from "lucide-react";
import { useState } from "react";
import LockedDayModal from "./LockedDayModal";

export default function DayCard({ day, unlocked }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<motion.div
				whileHover={unlocked ? { y: -14, scale: 1.08 } : {}}
				transition={{ type: "spring", stiffness: 120, damping: 14 }}
				className="group relative h-64 rounded-3xl overflow-hidden
        shadow-[0_24px_70px_rgba(0,0,0,0.6)]
        cursor-pointer"
				onClick={() => {
					if (!unlocked) setShowModal(true);
				}}
			>
				{/* BG */}
				<motion.div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${day.cardBgImage})` }}
					whileHover={unlocked ? { scale: 1.3 } : {}}
					transition={{ duration: 1.3 }}
				/>

				<div className="absolute inset-0 bg-black/45" />

				{!unlocked && (
					<div className="absolute inset-0 bg-black/65
          flex flex-col items-center justify-center z-10">
						<Lock className="text-white mb-2" />
						<span className="text-white/80 text-sm">
							Locked 💝
						</span>
					</div>
				)}

				{unlocked && (
					<Link
						href={`/day/${day.slug}`}
						className="relative z-10 h-full
            flex flex-col items-center justify-center text-center px-6"
					>
						<span
							className="text-3xl font-semibold"
							style={{ color: day.accentColor }}
						>
							{day.title}
						</span>

						<span className="mt-2 text-white/90
            opacity-0 group-hover:opacity-100
            transition-all duration-300">
							{day.importance}
						</span>
					</Link>
				)}
			</motion.div>

			<LockedDayModal
				open={showModal}
				onOpenChange={setShowModal}
			/>
		</>
	);
}
