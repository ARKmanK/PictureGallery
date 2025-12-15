'use client'

import { useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'
import { useImages } from '@/hooks/useImages'

export default function HomePage() {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 300)
	const { data: images = [], isLoading } = useImages()

	return (
		<main className='w-[80%]'>
			<div className='pt-10'>
				<h1 className='text-3xl font-bold capitalize mb-4 text-primary'>Все категории</h1>
				<SearchInput search={search} onSearchChange={setSearch} />
				<div className='mt-8'>
					<ImagesGrid images={images} search={debouncedSearch} isLoading={isLoading} />
				</div>
			</div>
		</main>
	)
}
