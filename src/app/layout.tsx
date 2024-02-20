import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import type { PropsWithChildren } from 'react'

import Providers from '@/providers/Providers'

import '@/assets/styles/globals.scss'

import { getSiteUrl } from '@/config/url.config'

import Header from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'
import { SITE_NAME } from '@/constants/seo.constants'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@amazon.com']
	}
}

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={golos.variable}>
			<body>
				<Providers>
					<div className='bg-secondary'>
						<Header />
						<div
							className='grid'
							style={{
								gridTemplateColumns: '.8fr 4fr'
							}}
						>
							<Sidebar />
							<main className='p-12 pb-52 bg-bg-color rounded-tl-lg'>
								{children}
							</main>
						</div>
					</div>
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
