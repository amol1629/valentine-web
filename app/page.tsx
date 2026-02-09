'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { valentineDays } from '@/data/valentineDays'
import { isUnlocked } from '@/lib/unlockLogic'
import DayCard from '@/components/DayCard'

export default function Home() {
	return (
		<main className="relative min-h-screen overflow-hidden flex items-center justify-center">
			{/* Background */}
			<Image
				src="https://t3.ftcdn.net/jpg/07/03/66/40/360_F_703664087_PbvY3jjPE58qANjsoNyeAlU0niMicVRf.jpg"
				alt="Valentine Background"
				fill
				priority
				className="object-cover scale-110"
			/>

			{/* Soft dark overlay */}
			<div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="relative z-10 w-[92%] max-w-4xl"
			>
				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="text-center text-4xl md:text-5xl font-semibold
          text-white mb-12 tracking-tight"
				>
					Valentine Week <span className="text-rose-300">💖</span>
				</motion.h1>

				{/* Cards */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{valentineDays.map((day, index) => (
						<DayCard key={day.slug} day={day} unlocked={isUnlocked(index)} />
					))}
				</div>
			</motion.div>
		</main>
	)
}
