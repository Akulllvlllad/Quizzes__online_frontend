import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentQuizSelect } from '../../app/slices/room/selectors'
import styles from './Information.module.scss'

export const Information = () => {
	const currentRoom = useSelector(getCurrentQuizSelect)
	
	
	return (
		<>
			{currentRoom.isLoading === 'Титульная' ? (
				<div className={styles.root}>
					<h3 className={styles.title}>Информация: </h3>

					<div className={styles.img}>
						<img
							src={`${currentRoom.state.quiz.imgPath}`}
							alt='Титульная фото'
						/>
					</div>

					<div className='line' />

					<table className={styles.table}>
						<thead>
							<tr>
								<td>Настройки</td>
								<td>Значение</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Название</td>
								<td>{currentRoom.state.quiz.title}</td>
							</tr>
							<tr>
								<td>Тип</td>
								<td>{currentRoom.state.quiz.settings.type || 'Стандарт'} </td>
							</tr>
							<tr>
								<td>Комната</td>
								<td>{currentRoom.state.room}</td>
							</tr>
							<tr>
								<td>Вопросов</td>
								<td>{currentRoom.state.quiz.questions.length}</td>
							</tr>
							<tr>
								<td>Состояние</td>
								<td>
									{currentRoom.state.quiz.settings.isStart
										? 'Игра идет...'
										: 'Пауза'}
								</td>
							</tr>
							<tr>
								<td>Время</td>
								<td>
									{currentRoom.state.quiz.settings.time
										? currentRoom.state.quiz.settings.time / 10
										: 0}{' '}
									сек
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			) : null}
		</>
	)
}
