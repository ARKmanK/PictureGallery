import { IImage } from '@/types/images'

const API = process.env.API_URL || 'http://localhost:3000'

interface FetchImagesParams {
	category?: string
	type?: string
}

interface FilterOptions {
	[key: string]: string[]
}

export const fetchImages = async ({ category, type }: FetchImagesParams = {}) => {
	let endpoint = ''

	if (!category && !type) {
		endpoint = '/api/images/categories'
	} else if (category && !type) {
		endpoint = `/api/images/${category}`
	} else if (category && type) {
		endpoint = `/api/images/${category}/${type}`
	}

	const res = await fetch(endpoint)
	if (!res.ok) throw new Error('Failed to fetch images')
	return res.json() as Promise<IImage[]>
}

export const fetchFilterOptions = async (path: string): Promise<FilterOptions> => {
	const segments = path.split('/').filter(Boolean)

	if (segments.length === 0) return {}

	const endpoint =
		segments.length === 1
			? `/api/images/${segments[0]}`
			: `/api/images/${segments[0]}/${segments[1]}`

	try {
		const response = await fetch(endpoint)
		const data = await response.json()

		if (!Array.isArray(data) || data.length === 0) return {}

		const IGNORE_FIELDS = ['id', 'name', 'image', 'type', 'category', 'tags', 'date']
		const options: Record<string, Set<string>> = {}

		data.forEach(item => {
			Object.keys(item).forEach(key => {
				if (IGNORE_FIELDS.includes(key)) return

				const value = item[key]
				if (value && typeof value === 'string') {
					if (!options[key]) options[key] = new Set()
					options[key].add(value)
				}
			})
		})

		const result: FilterOptions = {}
		Object.keys(options).forEach(key => {
			result[key] = Array.from(options[key]).sort()
		})

		return result
	} catch (error) {
		console.error('Error fetching filter options:', error)
		return {}
	}
}
