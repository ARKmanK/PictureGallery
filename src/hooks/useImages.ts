import { fetchImages, getCategories } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export const useImages = (category?: string) => {
	return useQuery({
		queryKey: ['images', category],
		queryFn: () => fetchImages(category),
		staleTime: 5 * 60 * 1000,
		gcTime: 10 * 60 * 1000,
	})
}
