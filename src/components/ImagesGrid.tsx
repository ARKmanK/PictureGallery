'use client'

import { Card, CardContent } from '@/components/ui/card'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ImagesGridProps {
	search: string
	images: any[]
	isLoading?: boolean
	category?: string
	type?: string
}

const ImagesGrid = ({ search, images = [], isLoading, category, type }: ImagesGridProps) => {
	const router = useRouter()

	const filteredImages = search
		? images.filter((img: any) => img.name.toLowerCase().includes(search.toLowerCase()))
		: images

	const handleClick = (image: any) => {
		if (!category) {
			router.push(`/${image.type}`)
		} else if (category && !type) {
			router.push(`/${category}/${image.type}`)
		}
	}

	if (isLoading) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{Array.from({ length: 12 }).map((_, i) => (
					<Card key={i} className='animate-pulse'>
						<CardContent className='p-0'>
							<div className='w-full h-60 bg-gray-200 dark:bg-gray-700' />
						</CardContent>
						<div className='p-4 space-y-2'>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4' />
							<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2' />
						</div>
					</Card>
				))}
			</div>
		)
	}

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{filteredImages.map((image: any) => (
					<Card
						key={image.id}
						className='overflow-hidden hover:shadow-lg transition-shadow relative border-none group p-0 cursor-pointer'
						onClick={() => handleClick(image)}
					>
						<CardContent className='p-0 relative'>
							<div className='relative w-full h-60'>
								<Image
									src={image.image}
									alt={image.name}
									fill
									className='object-cover cursor-pointer transition-all duration-300 group-hover:brightness-50'
									loading='lazy'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
								/>
							</div>

							<div className='absolute bottom-0 left-0 right-0 p-4 pointer-events-none z-10'>
								<div className='flex items-center justify-center'>
									<SearchIcon size={21} color='white' />
									<p className='text-white font-semibold text-nowrap ml-1'>{image.name}</p>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
			{filteredImages.length === 0 && (
				<div className='text-center py-12'>
					<p className='text-gray-500'>
						{search ? 'Изображения не найдены' : 'Нет изображений для отображения'}
					</p>
				</div>
			)}
		</>
	)
}

export default ImagesGrid
