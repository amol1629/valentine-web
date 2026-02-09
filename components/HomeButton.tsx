'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomeButton() {
	return (
		<motion.div whileHover={{ scale: 1.1 }} className="fixed top-6 left-6 z-50">
			<Link href="/">
				<div
					className="p-3 rounded-full bg-white/20 backdrop-blur-lg
        border border-white/30 shadow-lg"
				>
					<Home className="text-white" />
				</div>
			</Link>
		</motion.div>
	)
}
