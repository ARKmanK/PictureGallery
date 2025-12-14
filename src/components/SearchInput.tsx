'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'

interface SearchInputProps {
	search: string
	onSearchChange: (value: string) => void
}

const SearchInput = ({ search, onSearchChange }: SearchInputProps) => {
	return (
		<div className='w-[30%] flex relative items-center'>
			<SearchIcon size={20} className='absolute left-1.5 text-primary' />
			<Input
				type='text'
				placeholder='Поиск изображений...'
				value={search}
				onChange={e => onSearchChange(e.target.value)}
				className='text-primary pl-9'
			/>
		</div>
	)
}

export default SearchInput
