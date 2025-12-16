'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useImages } from '@/hooks/useImages'
import { useTitle } from '@/hooks/useTitle'
import { usePagination } from '@/hooks/usePagination'

const TypePage = () => {
	const [search, setSearch] = useState('')
	const params = useParams()
	const router = useRouter()
	const { data: typeImages = [], isLoading } = useImages()
	const debouncedSearch = useDebounce(search, 300)
	const category = params.category as string
	const type = params.type as string
	const title = useTitle(category, type)
	const { paginatedItems, loadMore, getMore } = usePagination(typeImages, 12)

	if (!category || !type) {
		return <div>Загрузка...</div>
	}

	return (
		<main className='w-[80%]'>
			<div className='pt-10'>
				<Button
					variant='ghost'
					onClick={() => router.push(`/${category}`)}
					className='mb-6 p-2 text-primary'
				>
					<ArrowLeft className='mr-2' size={20} />
					Назад к {category}
				</Button>
				<div className='mb-6'>
					<h1 className='text-3xl font-bold capitalize mb-2'>{title}</h1>
				</div>
				<SearchInput search={search} onSearchChange={setSearch} />
				<div className='mt-8'>
					<ImagesGrid
						images={paginatedItems}
						search={debouncedSearch}
						isLoading={isLoading}
						category={category}
						type={type}
						onLoadMore={loadMore}
						getMore={getMore}
					/>
				</div>
			</div>
		</main>
	)
}

export default TypePage
