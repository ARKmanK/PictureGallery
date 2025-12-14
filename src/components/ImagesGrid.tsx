'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useImages } from '@/hooks/useImages'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface ImagesGridProps {
	search: string
	category?: string
}

interface ImageItem {
	id: number
	name: string
	image: string
	type: string
}

const ImagesGrid = ({ search, category }: ImagesGridProps) => {
	const router = useRouter()
	const { data: images = [], isLoading } = useImages(category)

	const filteredImages: ImageItem[] = search
		? images.filter((img: ImageItem) => img.name.toLowerCase().includes(search.toLowerCase()))
		: images

	const handleClick = (type: string) => {
		if (!category) {
			router.push(`/${type}`)
		}
	}

	if (isLoading) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
				{Array.from({ length: 12 }).map((_, i) => (
					<Card key={i} className='animate-pulse'>
						<CardContent className='p-0'>
							<div className='w-full h-31 bg-gray-200 dark:bg-gray-700' />
						</CardContent>
						<CardHeader className='space-y-2'>
							<div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4' />
							<div className='h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2' />
						</CardHeader>
					</Card>
				))}
			</div>
		)
	}

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10'>
				{filteredImages.map((image: ImageItem) => (
					<Card
						key={image.id}
						className='overflow-hidden hover:shadow-lg transition-shadow relative border-none group p-0 cursor-pointer'
						onClick={() => handleClick(image.type)}
					>
						<CardContent className='p-0 relative'>
							<div className='relative w-full h-60'>
								<Image
									src={image.image}
									alt={image.name}
									fill
									className='object-cover cursor-pointer transition-all duration-300 group-hover:brightness-50'
									loading='lazy'
								/>
							</div>
							<div className='absolute bottom-0 left-0 right-0 pb-1.5 pointer-events-none z-10'>
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
