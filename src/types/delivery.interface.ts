import { IUser } from '@/types/user.interface'

export interface IDeliveryCreate {
	address: string
	city: string
	house: string
	building?: string
}

export interface IDelivery {
	id: number
	createdAt: string
	address: string
	city: string
	house: string
	building?: string
	user: IUser
}
