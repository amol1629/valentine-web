'use client'

import { motion } from 'framer-motion'
import FloatingHearts from './FloatingHearts'
import { ValentineFinaleProps } from '@/types/valentine'

export default function ValentineFinale({ message }: ValentineFinaleProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-screen bg-gradient-to-br
      from-red-700 via-pink-600 to-purple-700
      flex flex-col items-center justify-center text-white text-center p-6"
		>
			<FloatingHearts />

			<motion.h1
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.5, type: 'spring' }}
				className="text-5xl font-extrabold mb-6"
			>
				Happy Valentine’s Day ❤️
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="text-xl max-w-xl"
			>
				{message}
			</motion.p>
		</motion.div>
	)
}
