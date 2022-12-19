import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allQuizSelect } from '../../app/slices/userState/selectors'
import { useActions } from '../../hooks/useActions'
import styles from './AllQuiz.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const AllQuiz = () => {
	const { fetchGetAllQuiz } = useActions()

	const allQuiz = useSelector(allQuizSelect)

	useEffect(() => {
		fetchGetAllQuiz()
	}, [])

	return (
		<div className={styles.root}>
			<h2 className={styles.title}>Викторины</h2>
			<Swiper spaceBetween={50} slidesPerView={3}>
				{allQuiz.state.map(quiz => (
					<SwiperSlide key={quiz._id}>
						<div className={styles.item}>
							<div className={styles.img}>
								<img src={`${quiz.imgPath}`} alt={quiz.title} />
							</div>
							<div className={styles.body}>
								<h3>{quiz.title}</h3>
								<p>Количество вопросов: {quiz.questions.length}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
