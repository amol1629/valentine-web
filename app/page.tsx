"use client";

import Image from "next/image";
import { valentineDays } from "@/data/valentineDays";
import { isUnlocked } from "@/lib/unlockLogic";
import DayCard from "@/components/DayCard";
import GSAPHeartParticles from "@/components/GSAPHeartParticles";
import HeartFlowCanvas from "@/components/HeartFlowCanvas";

export default function Home() {
	return (
		<main className="relative min-h-screen flex items-center justify-center overflow-hidden">

			<Image
				src="https://t3.ftcdn.net/jpg/07/03/66/40/360_F_703664087_PbvY3jjPE58qANjsoNyeAlU0niMicVRf.jpg"
				fill
				className="object-cover"
				alt="bg"
				priority
			/>

			<div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

			<GSAPHeartParticles />

			<HeartFlowCanvas/>

			<div className="relative z-10 w-[92%] max-w-5xl">
				<h1 className="text-center text-5xl font-semibold text-pink-300 mb-2">
					Valentine Week
				</h1>
				<p className="text-center text-white/80 mb-12">
					For Dipali ❤️
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{valentineDays.map((day, i) => (
						<DayCard
							key={day.slug}
							day={day}
							unlocked={isUnlocked(i)}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
