import Link from 'next/link'

import Heading from '@/ui/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>Not Found</Heading>
			<p>Could not find requested resource</p>
			<p>
				View{' '}
				<Link href='/explorer' className='text-primary'>
					all products
				</Link>
			</p>
		</>
	)
}
