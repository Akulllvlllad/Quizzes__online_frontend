import { IoIosCreate } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { QuizzesList } from '../../ui/admin/quizzes_list/Quizzes_list'
import { useActions } from '../../hooks/useActions'
import { useSelector } from 'react-redux'
import { userIdSelect } from '../../app/slices/auth/selectors'

export const Admin = () => {
	const navigate = useNavigate()

	const { fetchCreate } = useActions()

	const userId = useSelector(userIdSelect)

	const createQuizClick = async () => {
		const { payload: id } = await fetchCreate(userId)

		navigate(`/create/${id}`)
	}

	return (
		<main className='main'>
			<section className='admin'>
				<div className='make-quiz'>
					<button className='make-quiz__button' onClick={createQuizClick}>
						<IoIosCreate className='make-quiz__icon' />
					</button>
				</div>

				<div className=''>
					<QuizzesList />
				</div>
			</section>
		</main>
	)
}
