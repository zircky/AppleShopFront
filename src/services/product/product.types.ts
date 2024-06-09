export const PRODUCTS = 'products'

export type TypeProductData = {
	name: string
	price: number
	description?: string
	imagesId: number
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
	storage?: string
	screen?: string
	photo?: string
	processor?: string
	operatingSystem?: string
	displayRefreshRate?: string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export type TypeParamsFilters = {
	searchParams: TypeProductDataFilters
}
