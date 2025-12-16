export const getFieldLabel = (fieldName: string): string => {
	const labels: Record<string, string> = {
		date: 'Дата',
		location: 'Локация',
		size: 'Размер',
		color: 'Цвет',
		diet: 'Диета',
		habitat: 'Среда',
		group: 'Группа',
	}

	return labels[fieldName] || fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
}
