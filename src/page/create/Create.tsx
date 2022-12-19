import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import cn from 'classnames'
import { useCreate } from './useCreate'
import { TQuestion } from './create.interface'
import { QuestionList } from '../../ui/create/question_list/Question_list'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useActions } from '../../hooks/useActions'
import { useSelector } from 'react-redux'
import {
	oneQuizLoadingSelect,
	oneQuizSelect,
} from '../../app/slices/quiz/selectors'
import { PageLoader } from '../../ui/preloader/PageLoader'
import { IQuizWithId } from '../../app/slices/quiz/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuiz } from './useQuiz'
import Dropzone from '../../ui/dropzone/dropzone'

export interface IQuiz {
	title: string
	imgPath: string
	settings: {
		time: number
		type: string
		isStart: boolean
	}
	questions: TQuestion[]
}

export const CreateWrapper: React.FC = () => {
	const { id } = useParams()

	const { fetchGetOne } = useActions()

	React.useEffect(() => {
		fetchGetOne(id)
	}, [id])

	const loading = useSelector(oneQuizLoadingSelect)

	const Quiz = useSelector(oneQuizSelect)

	return loading === 'loading' || !!!Quiz ? (
		<PageLoader />
	) : (
		<Create initialState={Quiz} />
	)
}

export const Create: React.FC<{ initialState: IQuizWithId }> = ({
	initialState,
}) => {
	const [isCreating, setIsCreating] = React.useState(false)

	const {
		option,
		editOptions,
		onChangeOption,
		onChangeRightAnswer,
		onChangeQuestion,
		resetOption,
		onChangeQuestionImages,
	} = useCreate()

	const {
		quiz,
		changeQuizImagesPath,
		deleteQuestionClick,
		changeQuizTitle,
		changeQuizTime,
		addQuestions,
	} = useQuiz(initialState)

	const addQuestionClick = () => {
		addQuestions(option)
		resetOption()
		setIsCreating(false)
	}

	const editorMod = (obj: TQuestion) => {
		setIsCreating(true)
		editOptions(obj)
	}

	const { fetchUpdate } = useActions()
	const navigate = useNavigate()
	const saveQuizClick = () => {
		navigate('/admin')
		fetchUpdate(quiz)
	}

	return (
		<section className='main'>
			{isCreating ? (
				<div className='creating'>
					<IoArrowBackCircleOutline
						className='creating__back'
						onClick={() => setIsCreating(false)}
					/>
					<div className='creating__dropzone'>
						<Dropzone
							onChangesPath={onChangeQuestionImages}
							path={option.questionImages}
						/>
					</div>
					<div className='question'>
						<textarea
							placeholder='Напишите вопрос'
							value={option.question}
							onChange={onChangeQuestion}
						/>
					</div>

					<ul className='options'>
						{option.options.map(obj => (
							<li className='option' key={obj.id}>
								<div
									onClick={() => onChangeRightAnswer(obj.id)}
									className={cn('option__wrapper', {
										active: option.rightAnswer === obj.id,
									})}
								>
									<textarea
										placeholder={obj.placeholder}
										value={obj.value}
										onChange={event => onChangeOption(event, obj.id)}
									/>
								</div>
							</li>
						))}
					</ul>

					<button onClick={addQuestionClick}>Добавить</button>
				</div>
			) : (
				<div className='creating'>
					<div className='creating__dropzone'>
						<Dropzone
							onChangesPath={changeQuizImagesPath}
							path={quiz.imgPath}
						/>
					</div>
					<div className='settings'>
						<div className='settings__inputs'>
							<input
								className='settings__input'
								placeholder='название'
								value={quiz.title}
								onChange={changeQuizTitle}
							/>
							<input
								className='settings__input'
								type={'tel'}
								placeholder='время'
								value={quiz.settings.time}
								onChange={changeQuizTime}
							/>
						</div>
						<button className='settings__button' onClick={saveQuizClick}>
							Сохранить
						</button>
					</div>

					<div className='create'>
						<button
							className='create__button'
							onClick={() => setIsCreating(prev => !prev)}
						>
							<BsPlusCircle /> <span>Добавить</span>
						</button>
						<QuestionList
							editOptions={editorMod}
							list={quiz.questions}
							deleteQuestionClick={deleteQuestionClick}
						/>
					</div>
				</div>
			)}
		</section>
	)
}
