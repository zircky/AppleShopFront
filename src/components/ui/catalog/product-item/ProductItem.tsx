import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'
import styles from './ProductItem.module.scss'
import ProductRating from './ProductRating'


interface IFilter {
	product: IProduct
	isFilterOpen?: boolean
}

const ProductItem: FC<IFilter> = ({ product, isFilterOpen }) => {
	return (
		<div className='animate-scaleIn'>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-1'>
					<FavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={306}
						height={306}
						src={product.images.images[0]}
						alt={product.name}
						className='block mx-auto'
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3
					className={cn(styles.text, {
						[styles.filterOpened]: isFilterOpen,
						[styles.filterClous]: !isFilterOpen
					})}
				>
					{product.name}
				</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} isText />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
