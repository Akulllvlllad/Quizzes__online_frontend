import React from 'react'
import { IQuizWithId } from '../../../app/slices/quiz/types'
import styles from './search.module.scss'



export const Search: React.FC<{ state: IQuizWithId[] }> = ({ state }) => {


	return (
		<div className={styles.root}>
			{state.length === 0 ? (
				<div className={styles.notFount}>
					<span>Ничего не найдено</span>
				</div>
			) : (
				<div className={styles.grid}>
					{state.map(quiz => (
						<div key={quiz._id} className={styles.item}>
							<div className={styles.img}>
								<img src={quiz.imgPath} />
							</div>
							<h2>{quiz.title}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
