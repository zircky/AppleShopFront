import { FC } from 'react'

import Range from '@/ui/range/Range'

import { useFilters } from '../../useFilters'
import FilterWrapper from '../FilterWrapper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Price from/to'>
			<Range
				max={2000}
				fromInitialValue={queryParams.minPrice}
				toInitialValue={queryParams.maxPrice}
				onChangeFromValue={value => updateQueryParams('minPrice', value)}
				onChangeToValue={value => updateQueryParams('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
