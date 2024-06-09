import { usePathname } from 'next/navigation'

import { ADMIN_PANEL_URL } from '@/config/url.config'

export const useIsAdminPanel = () => {
	const pathname = usePathname()
	const isAdminPanel = pathname.startsWith(ADMIN_PANEL_URL)

	return { pathname, isAdminPanel }
}
