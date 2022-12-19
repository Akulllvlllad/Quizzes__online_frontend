import  { memo } from 'react'
import { FC } from 'react'
import { TOptions } from '../../../page/create/create.interface'
import styles from './AnswersList.module.scss'
import cn from 'classnames'

type TProps = {
	answersList: TOptions[]
	choiceOfAnswerClick: (id: number) => void
	choiceOfAnswer: number
	responseСheck: string
}

export const AnswersList: FC<TProps> = memo(
	({ answersList, choiceOfAnswerClick, choiceOfAnswer, responseСheck }) => {
		return (
			<div className={styles.root}>
				{answersList.map(obj => (
					<button
						key={obj.id}
						disabled={responseСheck !== 'normal'}
						onClick={() => choiceOfAnswerClick(obj.id)}
						className={cn(styles.item, {
							[styles.current]: obj.id === choiceOfAnswer,
							[styles.errorAll]:
								responseСheck === 'error' && choiceOfAnswer === -1,
							[styles.error]:
								responseСheck === 'error' && obj.id === choiceOfAnswer,
							[styles.true]:
								responseСheck === 'true' && obj.id === choiceOfAnswer,
						})}
					>
						<div className={styles.text}>
							<span>{obj.value}</span>
						</div>
					</button>
				))}
			</div>
		)
	}
)
