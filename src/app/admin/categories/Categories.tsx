'use client'

import { FC } from 'react'

import Heading from '@/ui/Heading'
import AdminList from '@/ui/admin/admin-list/AdminList'

import { useAdminCategories } from './useAdminCategories'

const Categories: FC = () => {
	const { data, isFetching, mutate } = useAdminCategories()

	return (
		<>
			<Heading className='mb-7'>Categories</Heading>
			<AdminList
				isLoading={isFetching}
				listItems={data}
				removeHandler={mutate}
			/>
		</>
	)
}

export default Categories
