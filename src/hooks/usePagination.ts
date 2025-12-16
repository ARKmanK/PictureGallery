'use client'

import { useState, useEffect } from 'react'

export const usePagination = (items: any[], itemsPerPage = 12) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [paginatedItems, setPaginatedItems] = useState<any[]>([])

	useEffect(() => {
		const startIndex = (currentPage - 1) * itemsPerPage
		setPaginatedItems(items.slice(0, startIndex + itemsPerPage))
	}, [items, currentPage, itemsPerPage])

	const loadMore = () => {
		setCurrentPage(prev => prev + 1)
	}

	const getMore = paginatedItems.length < items.length

	return {
		paginatedItems,
		loadMore,
		getMore,
		currentPage,
	}
}
