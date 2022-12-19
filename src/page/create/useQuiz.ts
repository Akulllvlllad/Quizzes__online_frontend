import React from 'react'
import { IQuizWithId } from '../../app/slices/quiz/types'
import { TQuestion } from './create.interface'

export const useQuiz = (initialState: IQuizWithId) => {
	const [quiz, setQuiz] = React.useState(initialState)

	const addQuestions = (option: TQuestion) => {
		setQuiz(prev => ({
			...prev,
			questions: prev.questions.filter(obj => obj._id !== option._id),
		}))

		setQuiz(prev => ({
			...prev,
			questions: [...prev.questions, option],
		}))
	}

	const deleteQuestionClick = (id: any) => {
		setQuiz(prev => ({
			...prev,
			questions: prev.questions.filter(obj => obj._id !== id),
		}))
	}

	const changeQuizTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuiz(prev => ({
			...prev,
			title: e.target.value,
		}))
	}

	const changeQuizTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuiz(prev => ({
			...prev,
		}))
	}
	const changeQuizImagesPath = (path: string) => {
		setQuiz(prev => ({
			...prev,
			imgPath: path,
		}))
	}

	return {
		quiz,
		changeQuizImagesPath,
		deleteQuestionClick,
		changeQuizTitle,
		changeQuizTime,
		addQuestions,
	}
}
