import { motion } from 'framer-motion'

export default function FloatingHearts() {
	return [...Array(12)].map((_, i) => (
		<motion.div
			key={i}
			className="absolute text-2xl"
			initial={{ y: '100vh', opacity: 0 }}
			animate={{ y: '-10vh', opacity: 1 }}
			transition={{
				duration: 6,
				delay: i * 0.4,
				repeat: Infinity,
			}}
		>
			❤️
		</motion.div>
	))
}
