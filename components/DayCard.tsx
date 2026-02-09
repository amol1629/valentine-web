'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

export default function DayCard({ day, unlocked }) {
	return (
		<motion.div
			whileHover={unlocked ? { y: -8, scale: 1.03 } : {}}
			transition={{ type: 'spring', stiffness: 200 }}
			className="relative h-32 rounded-2xl overflow-hidden
      bg-white/15 backdrop-blur-xl
      border border-white/20
      shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
		>
			{/* Hover glow */}
			{unlocked && (
				<div
					className="absolute inset-0 opacity-0 hover:opacity-100
        transition duration-500 bg-gradient-to-br
        from-rose-400/30 to-pink-500/20"
				/>
			)}

			{/* Locked overlay */}
			{!unlocked && (
				<div
					className="absolute inset-0 bg-black/55 backdrop-blur-sm
        flex flex-col items-center justify-center z-10"
				>
					<Lock className="text-white mb-1" size={18} />
					<span className="text-xs text-white/80">Unlocks tomorrow 💝</span>
				</div>
			)}

			{/* Content */}
			{unlocked ? (
				<Link
					href={`/day/${day.slug}`}
					className="relative z-20 h-full w-full
          flex items-center justify-center text-center px-3"
				>
					<span className="text-white font-medium text-sm md:text-base">
						{day.title}
					</span>
				</Link>
			) : (
				<div
					className="relative z-20 h-full w-full
        flex items-center justify-center text-center px-3"
				>
					<span className="text-white/50 font-medium text-sm md:text-base">
						{day.title}
					</span>
				</div>
			)}
		</motion.div>
	)
}
