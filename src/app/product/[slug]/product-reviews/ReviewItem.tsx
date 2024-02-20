import Image from 'next/image'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IReview } from '@/types/review.interface'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<div className='bg-white rounded-lg shadow-md p-6'>
			<div className='flex items-center mb-2'>
				<Image
					alt={review.user.name}
					src={review.user.avatarPath}
					width={40}
					height={40}
					className='mr-3 block rounded-full'
				/>
				<span>{review.user.name}</span>
			</div>
			<Rating
				readonly
				initialValue={review.rating}
				SVGstyle={{
					display: 'inline-block'
				}}
				size={20}
				allowFraction
				transition
			/>
			<div className='text-sm mt-4 leading-relaxed'>{review.text}</div>
		</div>
	)
}

export default ReviewItem
