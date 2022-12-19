import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { myRoomsSelect } from '../../app/slices/userState/selectors'
import { useActions } from '../../hooks/useActions'

export const MyQuizRooms = () => {
	const { fetchGetMyRooms } = useActions()

	const { userId } = useParams()

	const myRooms = useSelector(myRoomsSelect)

	React.useEffect(() => {
		if (userId) fetchGetMyRooms(userId)
	}, [])

	

	return (
		<section className='MyQuizRooms'>
			<div className='MyQuizRooms__container'>
				<div className='MyQuizRooms__inner'>
					<div className='rooms'>
						<h2 className='rooms__title'>Комнаты</h2>
						<div className='line' />

						<ul className='rooms__list'>
							{myRooms.state.map(room => (
								<Link key={room._id}  to={`/admin-room1/${room.room}`}>
									<li className='rooms__item'>
										<div className='rooms__img'>
											<img src={room.quizId.imgPath} alt='photo_quiz' />
										</div>
										<div className='rooms__info'>
											<span>Номер комнаты: {room.room}</span>
										</div>
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
