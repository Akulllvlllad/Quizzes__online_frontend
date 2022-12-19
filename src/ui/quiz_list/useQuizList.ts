import { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { socket } from '../../hooks/useSocket'

import { IQuizWithId } from '../../app/slices/quiz/types'

export const useQuizList = (quiz: IQuizWithId, stopPlaying: () => void) => {
	//=====STATE <=========================================================
	const [questions, setQuestions] = useState(quiz.questions || [])

	const [questionNumber, setQuestionNumber] = useState(0)

	const numberOfQuestions = quiz.questions.length

	const currentQuestions = questions[questionNumber]

	const [choiceOfAnswer, setChoiceOfAnswer] = useState(-1)

	const correctAnswer = questions[questionNumber].rightAnswer

	const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0)

	const [responseСheck, setResponseСheck] = useState('normal')

	//=====FN <=========================================================

	const choiceOfAnswerClick = (id: number) => {
		setChoiceOfAnswer(id)
	}

	const checkingAnswers = () => {
		if (choiceOfAnswer === correctAnswer) {
			setTotalCorrectAnswer(prev => prev + 1)
		}
	}

	const responseСhecking = () => {
		if (correctAnswer === choiceOfAnswer) {
			checkingAnswers()
			setResponseСheck('true')
		}

		if (correctAnswer !== choiceOfAnswer) {
			checkingAnswers()
			setResponseСheck('error')
		}
	}

	const endTern = () => {
		setResponseСheck('normal')

		if (questionNumber < numberOfQuestions - 1) {
			setQuestionNumber(prev => prev + 1)
		}

		if (questionNumber === numberOfQuestions - 1) {
			stopPlaying()
		}

		const expiryTimestamp = new Date()
		expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5)
		restart(expiryTimestamp)

		setChoiceOfAnswer(-1)
	}

	const { seconds, restart } = useTimer({
		expiryTimestamp: new Date(),
		onExpire: async () => {
			responseСhecking()
			setTimeout(endTern, 3000)
		},
	})

	useEffect(() => {
		const expiryTimestamp = new Date()
		expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5)
		restart(expiryTimestamp)
	}, [])

	useEffect(() => {
		socket.emit('ROOM:UPDATE_POINTS', {
			room: '1',
			points: totalCorrectAnswer,
		})
	}, [totalCorrectAnswer])

	return {
		seconds,
		questionNumber,
		numberOfQuestions,
		currentQuestions,
		responseСheck,
		choiceOfAnswerClick,
		choiceOfAnswer,
	}
}
