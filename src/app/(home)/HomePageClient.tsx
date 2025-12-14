'use client'

import { useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'

export default function HomePageClient() {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 300)

	return (
		<main className='w-[80%]'>
			<div className='pt-10'>
				<SearchInput search={search} onSearchChange={setSearch} />
				<div className='mt-8'>
					<ImagesGrid search={debouncedSearch} />
				</div>
			</div>
		</main>
	)
}
