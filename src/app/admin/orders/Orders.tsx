'use client'

import { FC } from 'react'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

import { useAdminOrders } from './useAdminOrders'

const Orders: FC = () => {
	const { data, isFetching } = useAdminOrders()

	return (
		<>
			<Heading className='mb-7'>Orders</Heading>
			<AdminList isLoading={isFetching} listItems={data} />
		</>
	)
}

export default Orders
