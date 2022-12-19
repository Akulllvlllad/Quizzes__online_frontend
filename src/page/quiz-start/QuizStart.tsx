import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	allQuizzesLoadingSelect,
	allQuizzesSelect,
	oneQuizLoadingSelect,
} from '../../app/slices/quiz/selectors'
import { PageLoader } from '../../ui/preloader/PageLoader'
import { useActions } from '../../hooks/useActions'

export const QuizStartWrapper = () => {
	const { fetchGetAll } = useActions()

	const QuizzesLoading = useSelector(allQuizzesLoadingSelect)

	React.useEffect(() => {
		fetchGetAll()
	}, [])

	return QuizzesLoading === 'loading' ? <PageLoader /> : <QuizStart />
}

export const QuizStart = () => {
	const Quizzes = useSelector(allQuizzesSelect)
	const QuizLoading = useSelector(oneQuizLoadingSelect)

	const [currentID, serCurrentID] = React.useState('')
	const [currentTitle, setCurrentTitle] = React.useState('')

	const { fetchGetOne } = useActions()

	const choiceQuizClick = (id: string, title: string) => {
		serCurrentID(id)
		setCurrentTitle(title)
	}

	const navigate = useNavigate()

	const startQuiz = () => {
		if (currentID) fetchGetOne(currentID)
		if (QuizLoading === 'fulfilled') {
			navigate('/quiz-test/:quiz')
		}
	}

	return (
		<main className='main'>
			<section className='quiz-start'>
				<div className=''>
					<ul>
						{Quizzes.map(obj => (
							<li
								key={obj._id}
								onClick={() => choiceQuizClick(obj._id, obj.title)}
							>
								<h3>{obj.title}</h3>
								<p> количество вопросов {obj.questions.length}</p>
							</li>
						))}
					</ul>
				</div>

				<div>
					<p>{currentTitle || 'выберите викторину'}</p>
					<button onClick={startQuiz}>начать викторину</button>
				</div>
			</section>
		</main>
	)
}
