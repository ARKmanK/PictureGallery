import { getTitle } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export const useTitle = (category: string, type?: string): string => {
	const { data = '' } = useQuery({
		queryKey: ['title', category, type],
		queryFn: () => getTitle(category, type),
		staleTime: 60 * 60 * 1000,
	})

	return data
}
