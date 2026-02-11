'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Firecracker from '@/components/Firecracker'
import FloatingParticles from '@/components/FloatingParticles'
import HomeButton from '@/components/HomeButton'
import { DayExperienceProps } from '@/types/valentine'
import { useEffect, useRef, useState } from 'react'

export default function DayExperience({ day }: DayExperienceProps) {
	const photos = day.photos ?? []

	/* ================= MUSIC LOGIC ================= */

	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [muted, setMuted] = useState(false)

	useEffect(() => {
		if (!audioRef.current || !day.music) return

		const audio = audioRef.current
		audio.volume = 0
		audio.play().catch(() => {
			// autoplay might be blocked
		})

		// Smooth fade in
		let vol = 0
		const fade = setInterval(() => {
			if (vol < 0.5) {
				vol += 0.05
				audio.volume = vol
			} else {
				clearInterval(fade)
			}
		}, 200)

		return () => {
			audio.pause()
			audio.currentTime = 0
		}
	}, [day.music])

	const toggleMute = () => {
		if (!audioRef.current) return
		audioRef.current.muted = !muted
		setMuted(!muted)
	}

	/* ================= LAYOUT ================= */

	const desktopPositions = [
		{ top: '6%', left: '10%' },
		{ top: '6%', right: '10%' },
		{ top: '35%', left: '2%' },
		{ top: '35%', right: '2%' },
		{ bottom: '6%', left: '15%' },
		{ bottom: '6%', right: '15%' },
	]

	const topMobilePhotos = photos.slice(0, 2)
	const bottomMobilePhotos = photos.slice(2)

	return (
		<div className="min-h-screen relative overflow-hidden">

			{/* AUDIO ELEMENT */}
			{day.music && (
				<audio
					ref={audioRef}
					src={day.music}
					loop
				/>
			)}

			{/* MUTE BUTTON */}
			{day.music && (
				<button
					onClick={toggleMute}
					className="
            fixed
            top-6
            right-6
            z-50
            bg-white/20
            backdrop-blur-lg
            border border-white/30
            text-white
            px-4 py-2
            rounded-full
            shadow-lg
            hover:scale-105
            transition
          "
				>
					{muted ? '🔇 Unmute' : '🔊 Mute'}
				</button>
			)}

			{/* Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${day.bgImage})` }}
			/>
			<div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />

			<HomeButton />
			<Firecracker />
			<FloatingParticles />

			{/* ================= MOBILE ================= */}
			<div className="md:hidden relative z-20 flex flex-col items-center px-6 pt-20 pb-16 text-center text-white">

				{/* Top Photos */}
				<div className="grid grid-cols-2 gap-5 mb-12">
					{topMobilePhotos.map((photo, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 + index * 0.1 }}
							style={{
								transform: index % 2 === 0 ? 'rotate(-4deg)' : 'rotate(4deg)',
							}}
							className="
                p-[3px]
                rounded-2xl
                bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300
                shadow-[0_12px_35px_rgba(255,105,135,0.35)]
              "
						>
							<div className="rounded-lg overflow-hidden">
								<Image
									src={photo}
									alt="memory"
									width={300}
									height={600}
									className="w-full h-48 object-cover"
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Content */}
				<div className="max-w-xl mb-12">
					<motion.h1
						initial={{ scale: 0 }}
						animate={{ scale: 1.05 }}
						transition={{ type: 'spring', delay: 0.5 }}
						className="text-3xl font-extrabold mb-6 drop-shadow-xl"
					>
						{day.title}
					</motion.h1>

					<p className="text-base mb-6 opacity-90 whitespace-pre-line">
						{day.line}
					</p>

					<motion.pre
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8 }}
						className="text-sm whitespace-pre-line italic text-rose-200"
					>
						{day.shayari}
					</motion.pre>
				</div>

				{/* Bottom Photos */}
				<div className="grid grid-cols-2 gap-5">
					{bottomMobilePhotos.map((photo, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 + index * 0.1 }}
							style={{
								transform: index % 2 === 0 ? 'rotate(3deg)' : 'rotate(-3deg)',
							}}
							className="
                p-[3px]
                rounded-2xl
                bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300
                shadow-[0_12px_35px_rgba(255,105,135,0.35)]
              "
						>
							<div className="rounded-lg overflow-hidden">
								<Image
									src={photo}
									alt="memory"
									width={300}
									height={600}
									className="w-full h-48 object-cover"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* ================= DESKTOP ================= */}
			<div className="hidden md:flex relative z-20 items-center justify-center min-h-screen px-20 text-center text-white">

				<div className="max-w-2xl">
					<motion.h1
						initial={{ scale: 0 }}
						animate={{ scale: 1.05 }}
						transition={{ type: 'spring', delay: 0.3 }}
						className="text-5xl font-extrabold mb-6 drop-shadow-xl"
					>
						{day.title}
					</motion.h1>

					<p className="text-lg mb-6 opacity-90 whitespace-pre-line">
						{day.line}
					</p>

					<motion.pre
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="text-lg whitespace-pre-line italic text-rose-200"
					>
						{day.shayari}
					</motion.pre>
				</div>
			</div>

			{/* Desktop Frames */}
			<div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
				{photos.slice(0, 6).map((photo, index) => {
					const pos = desktopPositions[index]
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.85 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.8 + index * 0.15 }}
							className="absolute"
							style={{
								...pos,
								transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(6deg)',
							}}
						>
							<div
								className="
                  p-[4px]
                  rounded-3xl
                  bg-gradient-to-br from-rose-200 via-pink-100 to-rose-300
                  shadow-[0_25px_60px_rgba(255,105,135,0.4)]
                  w-44
                "
							>
								<div className="rounded-xl overflow-hidden">
									<Image
										src={photo}
										alt="memory"
										width={500}
										height={600}
										className="w-full h-52 object-cover"
									/>
								</div>
							</div>
						</motion.div>
					)
				})}
			</div>

		</div>
	)
}
