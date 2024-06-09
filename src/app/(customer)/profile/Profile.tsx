import Link from 'next/link'
import { FC } from 'react'

const Profile: FC = () => {
	return (
		<div>
			<h1>Profile</h1>
			<Link href='/delivery'>Delivery</Link>
		</div>
	)
}
export default Profile
