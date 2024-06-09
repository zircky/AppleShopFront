import Orders from './Orders'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata = {
	title: 'Orders',
	...NO_INDEX_PAGE
}

export default function OrderPage() {
	return <Orders />
}
