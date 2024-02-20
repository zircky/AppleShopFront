import { ICategory } from '@/types/category.interface'

import { IMenuItem } from './menu.interface'

export const convertToMenuItems = (categories: ICategory[]): IMenuItem[] =>
	categories.map(category => ({
		label: category.name,
		href: `/category/${category.slug}`
	}))
