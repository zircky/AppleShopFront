import { useQuery } from '@tanstack/react-query'

import { CategoryService } from '@/services/category.service'

export const useCategories = () => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return { data, isLoading }
}
