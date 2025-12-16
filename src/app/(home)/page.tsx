'use client'

import { useCallback, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'
import { useImages } from '@/hooks/useImages'
import { usePagination } from '@/hooks/usePagination'

const HomePage = () => {
	const [search, setSearch] = useState('')
	const { data: images = [], isLoading } = useImages()
	const { paginatedItems, loadMore, getMore } = usePagination(images, 12)
	const debouncedSearch = useDebounce(search, 300)

	const handleSearchChange = useCallback((value: string) => {
		setSearch(value)
	}, [])

	return (
		<main className='w-[80%] mt-50'>
			<div className='pt-10'>
				<h1 className='text-3xl font-bold capitalize mb-4 text-primary'>Все категории</h1>
				<SearchInput search={search} onSearchChange={handleSearchChange} />
				<div className='mt-8'>
					<ImagesGrid
						images={paginatedItems}
						search={debouncedSearch}
						isLoading={isLoading}
						onLoadMore={loadMore}
						getMore={getMore}
					/>
				</div>
			</div>
		</main>
	)
}
export default HomePage
