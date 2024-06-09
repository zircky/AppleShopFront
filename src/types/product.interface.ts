import { IImages } from '@/types/images.interface'

import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: IImages
	createdAt: string
	category: ICategory
	storage: string
	screen: string
	photo: string
	processor: string
	operatingSystem: string
	displayRefreshRate: string
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}

export type TypeProductCharacterisation = {}
