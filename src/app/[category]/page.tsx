'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
import SearchInput from '@/components/SearchInput'
import ImagesGrid from '@/components/ImagesGrid'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CategoryPage() {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 300)
	const params = useParams()
	const router = useRouter()

	const category = params.category as string

	return (
		<main className='w-[80%]'>
			<div className='pt-10'>
				<Button
					variant='ghost'
					onClick={() => router.push('/')}
					className='mb-6 px-0! text-primary'
				>
					<ArrowLeft className='mr-2 ' size={20} />
					Назад ко всем категориям
				</Button>
				<h1 className='text-3xl font-bold capitalize mb-4 text-primary'>{category}</h1>
				<SearchInput search={search} onSearchChange={setSearch} />
				<div className='mt-8'>
					<ImagesGrid search={debouncedSearch} category={category} />
				</div>
			</div>
		</main>
	)
}
