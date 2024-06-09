import { IDelivery, IDeliveryCreate } from '@/types/delivery.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

const DELIVERY = 'delivery'

export const DeliveryService = {
	async getDeliveries() {
		return instance<IDelivery>({
			url: DELIVERY,
			method: 'GET'
		})
	},

	async createDelivery(data: IDeliveryCreate) {
		const response = await axiosClassic<IDelivery>({
			url: `${DELIVERY}/create`,
			method: 'POST',
			data
		})

		return response.data
	}
}
