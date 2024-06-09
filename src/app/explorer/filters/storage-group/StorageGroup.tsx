import { FC } from 'react'

import Checkbox from '@/ui/checkbox/Checkbox'

import FilterWrapper from '@/app/explorer/filters/FilterWrapper'
import { useFilters } from '@/app/explorer/useFilters'


const storageData = [
	{
		name: '128 GB'
	},
	{
		name: '256 GB'
	},
	{
		name: '512 GB'
	},
	{
		name: '1 TB'
	}
]

const StorageGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title={'Storage'}>
			{storageData.map(item => {
				const isChecked = queryParams.storage === item.name
				return (
					<Checkbox
						isChecked={isChecked}
						onClick={() =>
							updateQueryParams('storage', isChecked ? '' : item.name)
						}
						key={item.name}
					>
						{item.name}
					</Checkbox>
				)
			})}
		</FilterWrapper>
	)
}

export default StorageGroup
