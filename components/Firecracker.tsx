'use client'

import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

export default function Firecracker() {
	const [show, setShow] = useState(true)

	useEffect(() => {
		setTimeout(() => setShow(false), 2500)
	}, [])

	if (!show) return null

	return <Confetti numberOfPieces={220} gravity={0.25} />
}
