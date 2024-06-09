'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoLogIn } from 'react-icons/io5'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import HeaderProfile from './HeaderProfile'
import Search from './Search'
import HeaderCart from './cart/HeaderCart'


const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='bg-gradient-to-r from-secondary from-15% via-black  to-granite w-full py-4 px-4 grid'
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link href='/'>
				{isAdminPanel ? (
					<h2 className='text-3xl text-white font-semibold'>Admin Panel</h2>
				) : (
					<Image
						priority
						width={180}
						height={37}
						src='/images/logo.svg'
						alt='Apple Shop'
					/>
				)}
			</Link>
			<Search />
			<div className='flex items-center justify-end gap-10'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'
						className='hover:text-primary transition-colors duration-200 text-white inline-block text-lg'
					>
						<MdOutlineAdminPanelSettings size={29} />
					</Link>
				)}
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				{user ? (
					<HeaderProfile />
				) : (
					<Link href='/auth'>
						<IoLogIn size={35} color={'FFFFFF'} />
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
