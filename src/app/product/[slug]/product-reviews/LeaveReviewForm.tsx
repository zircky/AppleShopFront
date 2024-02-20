import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'

import { IReviewFields } from './review-fields.interface'
import { ReviewService } from '@/services/review.service'

const LeaveReviewForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<IReviewFields>({
		mode: 'onChange'
	})

	const queryClient = useQueryClient()

	const { mutate, isSuccess, isLoading } = useMutation(
		['leave review'],
		(data: IReviewFields) => ReviewService.leave(productId, data),
		{
			onSuccess() {
				queryClient.refetchQueries(['get product', productId])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewFields> = data => {
		mutate(data)
		reset()
	}

	if (isSuccess) return <div>✅ Review successfully published!</div>

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading className='text-center mb-4'>Leave a review</Heading>

				{isLoading ? (
					<Loader />
				) : (
					<div>
						<Controller
							control={control}
							name='rating'
							render={({ field: { onChange, value } }) => (
								<Rating
									onClick={onChange}
									initialValue={value}
									SVGstyle={{
										display: 'inline-block'
									}}
									size={20}
									transition
								/>
							)}
							rules={{
								required: 'Rating is required'
							}}
						/>
						<textarea
							{...formRegister('text', {
								required: 'Text is required'
							})}
							placeholder='Your text here...'
							className='rounded-md border border-gray/70 bg-white p-3 block mt-4 resize-none w-full text-sm min-h-[110px]'
						/>

						{Object.entries(errors) && (
							<ul className='text-red animate-opacity text-sm list-disc pl-4 mt-3'>
								{Object.entries(errors).map(([_, error]) => (
									<li>{error?.message}</li>
								))}
							</ul>
						)}

						<div className='text-center mb-2 mt-8'>
							<Button type='submit' variant='orange'>
								Leave
							</Button>
						</div>
					</div>
				)}
			</form>
		</div>
	)
}

export default LeaveReviewForm
