'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FiLogOut } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'


const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, ref, setIsShow } = useOutside(false)
	const { user } = useAuth()
	const { logout } = useActions()

	if (!profile?.avatarPath) return null

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					width={43}
					height={43}
					src={profile?.avatarPath}
					alt='profile'
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			</button>
			{isShow && (
				<div
					className='absolute w-40 right-2 z-20'
					style={{
						top: 'calc(100% + 1rem)'
					}}
				>
					<Link
						href='/my-orders'
						className='bg-white shadow py-2 px-4 mb-1 block w-full rounded-md hover:text-primary duration-300 transition-colors '
					>
						My orders
					</Link>
					<Link
						href='/profile'
						className='bg-white shadow py-2 px-4 mb-1 block w-full rounded-md hover:text-primary duration-300 transition-colors'
					>
						Profile
					</Link>

					{!!user && (
						<button
							className='bg-white shadow py-2 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors relative'
							onClick={() => logout()}
						>
							<FiLogOut className={'absolute top-3'} />
							<span className='ml-2'>Logout</span>
						</button>
					)}
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
