'use client'

import { useState, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useImages } from '@/hooks/useImages'
import FilterPanel from '@/components/Filter'
import { useTitle } from '@/hooks/useTitle'
import { usePagination } from '@/hooks/usePagination'

const CategoryPage = () => {
	const [search, setSearch] = useState('')
	const [filters, setFilters] = useState<Record<string, any>>({})
	const params = useParams()
	const router = useRouter()
	const { data: images = [], isLoading } = useImages()
	const debouncedSearch = useDebounce(search, 300)
	const category = params.category as string
	const title = useTitle(category)

	const filteredImages = useMemo(() => {
		return images.filter(image => {
			if (debouncedSearch && !image.name?.toLowerCase().includes(debouncedSearch.toLowerCase())) {
				return false
			}
			for (const [key, value] of Object.entries(filters)) {
				if (value && image[key] !== value) {
					return false
				}
			}
			return true
		})
	}, [images, debouncedSearch, filters])

	const { paginatedItems, loadMore, getMore } = usePagination(filteredImages, 12)

	return (
		<main className='w-[80%]'>
			<div className='pt-10'>
				<Button variant='ghost' onClick={() => router.push('/')} className='mb-6 p-2 text-primary'>
					<ArrowLeft className='mr-2 ' size={20} />
					Назад ко всем категориям
				</Button>
				<h1 className='text-3xl font-bold capitalize mb-4 text-primary'>{title}</h1>
				<div className='flex space-x-4 items-center'>
					<SearchInput search={search} onSearchChange={setSearch} />
					<FilterPanel onFilterChange={setFilters} />
				</div>
				<div className='mt-8'>
					<ImagesGrid
						images={paginatedItems}
						search={debouncedSearch}
						isLoading={isLoading}
						category={category}
						onLoadMore={loadMore}
						getMore={getMore}
					/>
				</div>
			</div>
		</main>
	)
}

export default CategoryPage
