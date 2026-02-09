import { valentineDays } from '@/data/valentineDays'
import DayExperience from '@/components/DayExperience'

export default async function DayPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const day = valentineDays.find((d) => d.slug === slug)
	if (!day) return null

	return <DayExperience day={day} />
}
