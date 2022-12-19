import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../../hooks/useActions'


import styles from './Quizzes_list.module.scss'
import { RiEditFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { allQuizzesLoadingSelect, allQuizzesSelect } from '../../../app/slices/quiz/selectors'

export const QuizzesList: React.FC = () => {
	const { fetchGetAll } = useActions()

	React.useEffect(() => {
		fetchGetAll()
	}, [])

	const allQuizzesLoading = useSelector(allQuizzesLoadingSelect)

	

	return allQuizzesLoading === 'loading' ? (
		<ul>loading</ul>
	) : (
		<QuizzesListDisplay />
	)
}

const QuizzesListDisplay: React.FC = React.memo(() => {
	const allQuizzes = useSelector(allQuizzesSelect)

	const navigate = useNavigate()

	const { fetchDelete, fetchGetOne } = useActions()

	const deleteQuizClick = (id: string) => {
		fetchDelete(id)
	}

	const updateQuizClick = (id: string) => {
		fetchGetOne(id)
		navigate(`/create/${id}`)
	}
	
	return (
		<ul className={styles.root}>
			{allQuizzes.map(obj => (
				<li key={obj._id} className={styles.item}>
					<div className={styles.body}>
						<h3 className={styles.title}>{obj.title || 'Без названия'}</h3>
						<p>Количество вопросов: {obj.questions.length}</p>
					</div>
					<div className={styles.panel}>
						<RiEditFill
							className={styles.edit}
							onClick={() => updateQuizClick(obj._id)}
						/>
						<MdDelete
							className={styles.delete}
							onClick={() => deleteQuizClick(obj._id)}
						/>
					</div>
				</li>
			))}
		</ul>
	)
})
