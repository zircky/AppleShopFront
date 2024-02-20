'use client'

import Catalog from '@/ui/catalog/Catalog'

import { useProfile } from '@/hooks/useProfile'

interface IFavorites {}

export default function Favorites({}: IFavorites) {
	const { profile } = useProfile()

	return <Catalog products={profile?.favorites || []} title='Favorites' />
}
