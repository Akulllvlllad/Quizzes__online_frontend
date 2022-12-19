import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRoomSelect } from '../../app/slices/room/selectors'
import styles from './QuizList.module.scss'

import { TRoom } from '../../app/slices/room/types'
import { AnswersList } from './answers_list/AnswersList'
import { RiTimerFlashLine } from 'react-icons/ri'

import { useQuizList } from './useQuizList'

export const QuizListWrapper: React.FC<{ stopPlaying: () => void }> = ({
	stopPlaying,
}) => {
	const currentRoom = useSelector(getRoomSelect)

	const [state, setState] = React.useState<TRoom | null>(null)

	React.useEffect(() => {
		setState(currentRoom.state)
	}, [currentRoom])

	return !!state ? <QuizList room={state} stopPlaying={stopPlaying} /> : null
}

export const QuizList: FC<{ room: TRoom; stopPlaying: () => void }> = ({
	room,
	stopPlaying,
}) => {
	//===== STATE <=========================

	const { quiz } = room
	const {
		seconds,
		questionNumber,
		numberOfQuestions,
		currentQuestions,
		responseСheck,
		choiceOfAnswerClick,
		choiceOfAnswer,
	} = useQuizList(quiz, stopPlaying)

	return (
		<section className={styles.root}>
			<header className={styles.header}>
				<div className={styles.timer}>
					<RiTimerFlashLine className={styles.icon} />
					<span>{seconds}</span>
				</div>
			</header>
			<div className={styles.body}>
				<article className={styles.item}>
					<div className={styles.question}>
						<span className={styles.counter}>
							{questionNumber + 1} / {numberOfQuestions}
						</span>
						<span>{currentQuestions.question}</span>
					</div>

					<AnswersList
						responseСheck={responseСheck}
						answersList={currentQuestions.options}
						choiceOfAnswerClick={choiceOfAnswerClick}
						choiceOfAnswer={choiceOfAnswer}
					/>
				</article>
			</div>
		</section>
	)
}
