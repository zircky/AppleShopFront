'use client'

import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CSSTransition from '../CSSTransitionGroup'

import styles from './Carousel.module.scss'
import CarouselNavigation from './CarouselNavigation'
import { ICarouselItem } from './carousel.interface'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]

	return (
		<section className={cn(className, 'relative ')}>
			<CarouselNavigation />
			<TransitionGroup className='relative h-56'>
				<CSSTransition
					key={selectedItem.title}
					timeout={500}
					classNames={{
						enter: styles['item-enter'],
						enterActive: styles['item-enter-active'],
						exit: styles['item-exit'],
						exitActive: styles['item-exit-active']
					}}
					unmountOnExit
					mountOnEnter
				>
					<div
						className={styles.item}
						style={
							selectedItem.image
								? {
										backgroundImage: `url(${selectedItem.image})`
								  }
								: {}
						}
					>
						<h2>{selectedItem.title}</h2>
						<p>{selectedItem.description}</p>
						{selectedItem.link ? (
							<Link href={selectedItem.link} className='btn btn-white'>
								Read more
							</Link>
						) : (
							<Link href='/explorer' className='btn btn-white'>
								Browse products
							</Link>
						)}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}

export default Carousel
