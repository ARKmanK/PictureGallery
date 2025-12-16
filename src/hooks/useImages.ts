import { fetchImages } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

export const useImages = () => {
	const pathname = usePathname()

	const getParamsFromPath = () => {
		const segments = pathname.split('/').filter(Boolean)
		if (segments.length === 0) {
			return {}
		} else if (segments.length === 1) {
			return { category: segments[0] }
		} else if (segments.length === 2) {
			return { category: segments[0], type: segments[1] }
		}
		return {}
	}

	const params = getParamsFromPath()

	return useQuery({
		queryKey: ['images', ...Object.values(params)],
		queryFn: () => fetchImages(params),
		staleTime: 5 * 60 * 1000,
		gcTime: 10 * 60 * 1000,
	})
}
