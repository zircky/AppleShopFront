import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri'

import { IListItem } from '../admin-list.interface'

import styles from './AdminActions.module.scss'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	viewUrl
}) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			{viewUrl && (
				<button onClick={() => push(viewUrl)}>
					<RiExternalLinkLine />
				</button>
			)}
			{editUrl && (
				<button onClick={() => push(editUrl)}>
					<RiEdit2Line />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<RiDeleteRow />
				</button>
			)}
		</div>
	)
}

export default AdminActions
