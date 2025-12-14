import { Card, CardContent, CardHeader } from './ui/card'

export const ImageSkeleton = () => {
	return (
		<>
			<Card className='overflow-hidden animate-pulse'>
				<CardContent className='p-0'>
					<div className='w-full h-48 bg-gray-300 dark:bg-gray-700' />
				</CardContent>
				<CardHeader className='p-4 space-y-2'>
					<div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4' />
					<div className='h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2' />
				</CardHeader>
			</Card>
		</>
	)
}

export const ImageGridSkeleton = ({ count = 8 }: { count?: number }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
			{Array.from({ length: count }).map((_, index) => (
				<ImageSkeleton key={index} />
			))}
		</div>
	)
}
