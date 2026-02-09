import { Lock } from 'lucide-react'

export default function LockOverlay() {
	return (
		<div
			className="absolute inset-0 backdrop-blur-md bg-black/30
    flex flex-col items-center justify-center rounded-2xl"
		>
			<Lock className="w-8 h-8 text-white mb-2" />
			<p className="text-sm text-white">Unlocks tomorrow 💝</p>
		</div>
	)
}
