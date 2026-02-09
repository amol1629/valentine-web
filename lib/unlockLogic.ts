export const getDayIndex = (date: Date) => {
	const start = new Date('2026-02-07') // Rose Day
	const diff = Math.floor(
		(date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
	)
	return diff
}

export const isUnlocked = (dayIndex: number) => {
	const todayIndex = getDayIndex(new Date())
	return dayIndex <= todayIndex
}
