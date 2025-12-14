import { IImage } from '@/types/images'

const API = process.env.API_URL || 'http://localhost:3000'

export const fetchImages = async (category?: string) => {
	const endpoint = category ? `/api/images/${category}` : '/api/images/categories'

	const res = await fetch(endpoint)
	if (!res.ok) throw new Error('Failed to fetch images')
	return res.json() as Promise<IImage[]>
}

export async function getCategories(): Promise<IImage[]> {
	const res = await fetch(`${API}/api/images/categories`, { cache: 'no-store' })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
