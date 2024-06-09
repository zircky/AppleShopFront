import Catalog from '@/ui/catalog/Catalog'

import { IImages } from '@/types/images.interface'
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'


export const revalidate = 60

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()
	// const images = await ImagesService.getAll()

	const Paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	// const imagesPaths = images.data.map(image => {
	// 	return {
	// 		params: {slug: image.slug}
	// 	}
	// })

	return Paths
}

async function getProducts(params: TypeParamSlug) {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)

	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	// const {data: imagesProducts} = await ProductService.getByImages(
	// 	params?.slug as string
	// )
	//
	// const { data: imagesSlug} = await ImagesService.getBySlug(
	// 	params?.slug as string
	// )

	return { products, category }
}

export async function generateMetadata({ params }: IPageSlugParam): Promise<{
	description: string
	title: string
	openGraph: { images: IImages | any[]; description: string }
}> {
	const { category, products } = await getProducts(params)

	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0]?.images || [],
			description: `Random description about ${category.name}`
		}
	}
}

export default async function CategoryPage({ params }: IPageSlugParam) {
	const data = await getProducts(params)

	return <Catalog products={data.products || []} title={data.category.name} />
}
