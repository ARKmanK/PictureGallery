import { IImage } from '@/types/images'

const API = process.env.API_URL || 'http://localhost:3000'

interface IFetchImages {
	category?: string
	type?: string
}

interface IFilterOptions {
	[key: string]: string[]
}

export const fetchImages = async ({ category, type }: IFetchImages = {}) => {
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

export const fetchFilterOptions = async (path: string): Promise<IFilterOptions> => {
	const segments = path.split('/').filter(Boolean)
	if (segments.length === 0) return {}
	const endpoint =
		segments.length === 1
			? `/api/images/${segments[0]}`
			: `/api/images/${segments[0]}/${segments[1]}`

	try {
		const response = await fetch(endpoint)
		const data = await response.json()
		const IGNORE_FIELDS = ['id', 'name', 'image', 'type', 'category', 'tags', 'date']
		const options: Record<string, Set<string>> = {}

		if (!Array.isArray(data) || data.length === 0) return {}

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

		const result: IFilterOptions = {}
		Object.keys(options).forEach(key => {
			result[key] = Array.from(options[key]).sort()
		})

		return result
	} catch (error) {
		console.error('Error fetching filter options:', error)
		return {}
	}
}

export const getTitle = async (category: string, type?: string): Promise<string> => {
	try {
		if (type) {
			const response = await fetch(`/api/images/${category}`)
			const data = await response.json()

			if (Array.isArray(data)) {
				const foundItem = data.find((item: IImage) => item.type === type)
				if (foundItem?.name) {
					return foundItem.name
				}
			}
			return type.charAt(0).toUpperCase() + type.slice(1)
		}

		const response = await fetch('/api/images/categories')
		const data = await response.json()

		if (Array.isArray(data)) {
			const foundItem = data.find((item: IImage) => item.type === category)
			if (foundItem?.name) {
				return foundItem.name
			}
		}
		return category.charAt(0).toUpperCase() + category.slice(1)
	} catch (error) {
		console.error('Error getting title:', error)
		const fallback = type || category
		return fallback.charAt(0).toUpperCase() + fallback.slice(1)
	}
}
