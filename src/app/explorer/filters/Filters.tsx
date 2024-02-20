import { FC } from 'react'

import CategoryGroup from './category-group/CategoryGroup'
import PriceGroup from './price-group/PriceGroup'
import RatingGroup from './ratings-group/RatingGroup'

const Filters: FC = () => {
	return (
		<div>
			<PriceGroup />
			<CategoryGroup />
			<RatingGroup />
		</div>
	)
}

export default Filters
