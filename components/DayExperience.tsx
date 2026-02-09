'use client'

import { motion } from 'framer-motion'
import Firecracker from '@/components/Firecracker'
import FloatingParticles from '@/components/FloatingParticles'
import HomeButton from '@/components/HomeButton'

export default function DayExperience({ day }) {
	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 1.2, ease: 'easeOut' }}
			className="min-h-screen relative overflow-hidden"
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center scale-105"
				style={{ backgroundImage: `url(${day.bgImage})` }}
			/>

			{/* Dark romantic overlay */}
			<div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

			{/* UI */}
			<HomeButton />
			<Firecracker />
			<FloatingParticles />

			{/* Content */}
			<div className="relative z-10 min-h-screen flex items-center justify-center px-6 text-center">
				<motion.div
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="max-w-2xl text-white"
				>
					<motion.h1
						initial={{ scale: 0 }}
						animate={{ scale: 1.15 }}
						transition={{ type: 'spring', delay: 0.8 }}
						className="text-5xl font-extrabold mb-6 drop-shadow-xl"
					>
						{day.title}
					</motion.h1>

					<p className="text-xl mb-6 opacity-90">{day.line}</p>

					<motion.pre
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.4 }}
						className="text-lg font-light whitespace-pre-line italic text-rose-200"
					>
						{day.shayari}
					</motion.pre>
				</motion.div>
			</div>
		</motion.div>
	)
}
