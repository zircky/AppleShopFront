import { FC } from 'react'

import CategoryGroup from './category-group/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'
import RatingGroup from './ratings-group/RatingGroup'
import StorageGroup from '@/app/explorer/filters/storage-group/StorageGroup'


const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RatingGroup />
			<StorageGroup />
		</div>
	)
}

export default Filters
