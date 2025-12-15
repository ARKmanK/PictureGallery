import { IImage } from '@/types/images'

const API = process.env.API_URL || 'http://localhost:3000'

interface FetchImagesParams {
	category?: string
	type?: string
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
