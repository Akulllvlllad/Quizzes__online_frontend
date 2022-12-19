import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
	allQuizSelect,
	allRoomsSelect,
} from '../../app/slices/userState/selectors'
import { useActions } from '../../hooks/useActions'
import styles from './AllRooms.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsFillDoorOpenFill } from 'react-icons/bs'

export const AllRooms = () => {
	const { fetchGetAllRooms } = useActions()

	const allRooms = useSelector(allRoomsSelect)

	useEffect(() => {
		fetchGetAllRooms()
	}, [])

	return (
		<div className={styles.root}>
			<h2 className={styles.title}>Комнаты</h2>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				
			>
				{allRooms.state.map(room => (
					<SwiperSlide key={room._id}>
						<div className={styles.item}>
							<div className={styles.roomImg}>
								<BsFillDoorOpenFill className={styles.item} />
							</div>
							<div className={styles.body}>
								<h3>Номер комнаты: {room.room}</h3>
								<h3>Создатель: {room.creatorId.name}</h3>
								<h3>Викторина: {room.quizId.title}</h3>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
