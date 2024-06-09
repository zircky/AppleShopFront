import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

interface IProductCh {
	product: IProduct
}

const ProductCharacterisation: FC<IProductCh> = ({ product }) => {
	return (
		<>
			<table className={'h-[500px] w-[500]'}>
				<thead>
					<tr>
						<th>Characterisation</th>
					</tr>
				</thead>
				<tbody>
					<tr className={'h-14'}>
						<th>Storage:</th>
						<td>{product.storage}</td>
					</tr>
					<tr className={'h-14'}>
						<th>Color:</th>
						<td>{product.images.color}</td>
					</tr>
					<tr className={'h-14'}>
						<th>Фото:</th>
						<td>{product.photo}</td>
					</tr>
					<tr className={'h-14'}>
						<th>Процессор:</th>
						<td>{product.processor}</td>
					</tr>
					<tr className={'h-14'}>
						<th>Операционная система:</th>
						<td>{product.operatingSystem}</td>
					</tr>
					<tr className={'h-14'}>
						<th>Частота обновления экрана:</th>
						<td>{product.displayRefreshRate}</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default ProductCharacterisation
