import { TypeProductDataFilters } from '@/services/product/product.types'

export interface IFiltersState {
	isFilterUpdated: boolean
	queryParams: TypeProductDataFilters
}

export interface IFiltersActionsPayload {
	key: keyof TypeProductDataFilters
	value: string
}
