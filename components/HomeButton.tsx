'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomeButton() {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			className="fixed top-6 left-6 z-50"
		>
			<Link href="/">
				<div
					className="
            p-3 rounded-full
            bg-pink-200/70
            backdrop-blur-xl
            border border-pink-300/40
            shadow-[0_8px_25px_rgba(255,105,180,0.35)]
            transition-all duration-300
          "
				>
					<Home className="text-pink-700" />
				</div>
			</Link>
		</motion.div>
	)
}
