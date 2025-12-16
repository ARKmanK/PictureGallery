'use client'

import { useState, useEffect } from 'react'
import { Filter as FilterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getFieldLabel } from '@/utils/getFilterLabels'
import { usePathname } from 'next/navigation'
import { fetchFilterOptions } from '@/lib/api'

interface FilterProps {
	onFilterChange: (filters: Record<string, any>) => void
}

export default function Filter({ onFilterChange }: FilterProps) {
	const [filters, setFilters] = useState<Record<string, any>>({})
	const [filterOptions, setFilterOptions] = useState<Record<string, string[]>>({})
	const pathname = usePathname()

	useEffect(() => {
		const loadFilterOptions = async () => {
			const options = await fetchFilterOptions(pathname)

			setFilterOptions(options)
		}
		loadFilterOptions()
	}, [])

	const handleFilterChange = (fieldName: string, value: string) => {
		const newFilters = { ...filters }

		if (!value || value === 'all') {
			delete newFilters[fieldName]
		} else {
			newFilters[fieldName] = value
		}
		setFilters(newFilters)
		onFilterChange(newFilters)
	}

	const handleReset = () => {
		setFilters({})
		onFilterChange({})
	}
	if (Object.keys(filterOptions).length === 0) {
		return null
	}

	return (
		<>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant='outline' size='sm' className='gap-2'>
						<FilterIcon className='h-4 w-4' />
						Фильтры
						{Object.keys(filters).length > 0 && (
							<Badge variant='secondary' className='ml-1'>
								{Object.keys(filters).length}
							</Badge>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-80' align='start'>
					<div className='space-y-4'>
						<div className='flex items-center justify-between'>
							<h4 className='font-medium mb-2'>Фильтры</h4>
							{Object.keys(filters).length > 0 && (
								<button
									onClick={handleReset}
									className='text-sm text-muted-foreground hover:text-foreground'
								>
									Сбросить
								</button>
							)}
						</div>
						<div className='space-y-4'>
							{Object.entries(filterOptions).map(([fieldName, options]) => (
								<div key={fieldName}>
									<p className='text-sm font-medium mb-1'>{getFieldLabel(fieldName)}</p>
									<Select
										value={filters[fieldName] || 'all'}
										onValueChange={value => handleFilterChange(fieldName, value)}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Все' />
										</SelectTrigger>
										<SelectContent>
											<ScrollArea className='h-45'>
												<div className='p-1'>
													<SelectItem value='all'>Все</SelectItem>
													{options.map(option => (
														<SelectItem key={option} value={option}>
															{option}
														</SelectItem>
													))}
												</div>
											</ScrollArea>
										</SelectContent>
									</Select>
								</div>
							))}
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</>
	)
}
