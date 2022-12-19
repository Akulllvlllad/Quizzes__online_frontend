import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { userNameSelect } from '../../app/slices/auth/selectors'
import { useActions } from '../../hooks/useActions'
export type Inputs = {
	room: string
}

export const Main: React.FC = () => {
	
	
	const userName = useSelector(userNameSelect)

	const onSubmit: SubmitHandler<Inputs> = data => {
		if (data) {
			sessionStorage.setItem(
				'inRoomData',
				JSON.stringify({ ...data, name: userName })
			)

			
			navigate(`/room/${data.room}`)

			reset()
		}
	}

	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>()

	return (
		<section className='main'>
			<div className='door'>
				<form className='door__fields' onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('room')}
						type='tel'
						className='door__field'
						placeholder='Номер игры'
					/>
					<button type='submit' className=' header__button door__button'>
						Погнали! 🤪
					</button>
				</form>

				<div className='line' />
				<div className='description'>
					<h3 className='description__title'>Информация</h3>
					<p className='description__p'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						egestas vehicula ex et bibendum. Nam justo orci, dictum et auctor
						vitae, rhoncus eu diam.
					</p>
					<p className='description__p'>
						Cras sit amet elit et nibh bibendum maximus. Pellentesque
						condimentum imperdiet neque, vel varius lectus posuere sed. Duis in
						congue nisi, sit amet dictum augue. Fusce sollicitudin faucibus
						auctor.
					</p>
				</div>
			</div>
		</section>
	)
}
