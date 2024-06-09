'use client'

import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'

import { IDeliveryCreate } from '@/types/delivery.interface'

import { DeliveryService } from '@/services/delivery.service'


const DeliveryForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IDeliveryCreate>()

	const mutation = useMutation(['create delivery'], () =>
		DeliveryService.createDelivery({
			address: '',
			city: '',
			house: '',
			building: ''
		})
	)

	const onSubmit: SubmitHandler<IDeliveryCreate> = data => {
		// @ts-ignore
		mutation.mutate(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				placeholder='Address'
				{...register('address', {
					required: 'Address is required'
				})}
				error={errors.address?.message}
			/>
			<Field
				placeholder='City'
				{...register('city', {
					required: 'City is required'
				})}
				error={errors.city?.message}
			/>
			<Field
				placeholder='House'
				{...register('house', {
					required: 'House is required'
				})}
				error={errors.house?.message}
			/>
			<Field
				placeholder='Building'
				{...register('building', {
					required: 'Building is required'
				})}
				error={errors.building?.message}
			/>
			<Button type='submit' variant='orange' size='lg'>
				Submit
			</Button>{' '}
		</form>
	)
}

export default DeliveryForm
