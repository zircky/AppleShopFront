import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

import { ADMIN_PANEL_URL } from '@/config/url.config'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { protectedRoutes } from './protected-routes.data'
import Auth from '@/app/(customer)/auth/Auth'
import NotFound from '@/app/not-found'
import { REFRESH_TOKEN } from '@/constants/token.constants'
import { getAccessToken } from '@/services/auth/auth.helper'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const pathname = usePathname()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN)
		if (!refreshToken && user) logout()
	}, [pathname])

	const router = useRouter()

	const isProtectedRoute = protectedRoutes.some(route =>
		pathname?.startsWith(route)
	)

	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	if (!isProtectedRoute && !isAdminRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>

	if (user && isAdminRoute) return <NotFound />

	if (pathname !== '/auth') return <Auth />

	return null
}

export default AuthProvider
