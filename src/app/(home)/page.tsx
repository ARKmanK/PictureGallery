import { getCategories } from '@/lib/api'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import HomePageClient from './HomePageClient'

export default async function HomePage() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['images', 'categories'],
		queryFn: () => getCategories(),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<HomePageClient />
		</HydrationBoundary>
	)
}
