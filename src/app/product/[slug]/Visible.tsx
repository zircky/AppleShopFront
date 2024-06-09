import { useState } from 'react'

interface IProductVisible {
	description: string
}

const Visible = ({ description }: IProductVisible) => {
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

	const toggleDescription = () => {
		setIsDescriptionVisible(!isDescriptionVisible)
	}

	return (
		<div>
			<button onClick={toggleDescription} className={'text-aqua'}>
				{isDescriptionVisible ? 'Скрыть описание' : 'Показать описание'}
			</button>
			{isDescriptionVisible && <p>{description}</p>}
		</div>
	)
}

export default Visible
