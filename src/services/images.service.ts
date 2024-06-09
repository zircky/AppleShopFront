import { IImages } from '@/types/images.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

const IMAGES = 'images'

export const ImagesService = {
	async getAll() {
		return axiosClassic<IImages[]>({
			url: IMAGES,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IImages>({
			url: `${IMAGES}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IImages>({
			url: `${IMAGES}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IImages>({
			url: IMAGES,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<IImages>({
			url: `${IMAGES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<IImages>({
			url: `${IMAGES}/${id}`,
			method: 'DELETE'
		})
	}
}
