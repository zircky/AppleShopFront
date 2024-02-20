import { useMutation, useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { formatDate } from '@/utils/format-date'

import { ProductService } from '@/services/product/product.service'

export const useAdminProducts = () => {
	const { data, isFetching, refetch } = useQuery(
		['get admin products'],
		() => ProductService.getAll(),
		{
			select: data =>
				data.products.map((product): IListItem => {
					return {
						id: product.id,
						viewUrl: `/product/${product.slug}`,
						editUrl: getAdminUrl(`/products/edit/${product.id}`),
						items: [
							product.name,
							product.category.name,
							formatDate(product.createdAt)
						]
					}
				})
		}
	)

	const { mutate } = useMutation(
		['delete product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess() {
				refetch()
			}
		}
	)

	return {
		mutate,
		data,
		isFetching
	}
}
