type Props = {
	emoji?: string
}

export default function GlowOverlay({ emoji = '❤️' }: Props) {
	return (
		<>
			{/* Glow */}
			<div
				className="absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-700"
			>
				<div className="absolute inset-0 bg-white/20 blur-3xl" />
			</div>

			{/* Floating emoji */}
			<div
				className="absolute bottom-6 left-6 text-3xl
        opacity-60 group-hover:opacity-100
        transition duration-700"
			>
				{emoji}
			</div>
		</>
	)
}
