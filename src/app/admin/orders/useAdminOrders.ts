import { useQuery } from '@tanstack/react-query'

import { IListItem } from '@/ui/admin/admin-list/admin-list.interface'

import { getAdminUrl } from '@/config/url.config'

import { convertPrice } from '@/utils/convertPrice'
import { formatDate } from '@/utils/format-date'

import { OrderService } from '@/services/order.service'

export const useAdminOrders = () => {
	const { data, isFetching } = useQuery(
		['get admin orders'],
		() => OrderService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(order): IListItem => ({
						id: order.id,
						editUrl: getAdminUrl(`/orders/edit/${order.id}`),
						items: [
							`# ${order.id}`,
							order.status,
							formatDate(order.createdAt),
							convertPrice(order.total)
						]
					})
				)
		}
	)

	return {
		data,
		isFetching
	}
}
