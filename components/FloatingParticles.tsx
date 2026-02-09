import { motion } from 'framer-motion'

export default function FloatingParticles() {
	return [...Array(16)].map((_, i) => (
		<motion.span
			key={i}
			className="absolute text-2xl opacity-70"
			initial={{
				y: '110vh',
				x: `${Math.random() * 100}vw`,
				rotate: 0,
			}}
			animate={{
				y: '-20vh',
				rotate: 360,
			}}
			transition={{
				duration: 8 + Math.random() * 4,
				delay: Math.random() * 3,
				repeat: Infinity,
				ease: 'linear',
			}}
		>
			❤️
		</motion.span>
	))
}
