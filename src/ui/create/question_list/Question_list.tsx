import React from 'react'
import { TQuestion } from '../../../page/create/create.interface'
import styles from './Question_list.module.scss'
import { MdDelete } from 'react-icons/md'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import cn from 'classnames'
import { RiEditFill } from 'react-icons/ri'

export const QuestionList: React.FC<{
	list: TQuestion[]
	deleteQuestionClick: (id: any) => void
	editOptions: (id: any) => void
}> = ({ editOptions, list, deleteQuestionClick }) => {


	
	return list.length === 0 ? null : (
		<ul className={styles.root}>
			{list.map((obj, i) => (
				<li key={i} className={styles.item}>
					<div className={styles.body}>
						<span className={styles.title}>{obj.question}</span>
						<div className={styles.information}>
							<div
								className={cn(styles.information__item, {
									[styles.isHave]: !!obj.questionImages,
								})}
							>
								<MdOutlinePhotoSizeSelectActual />
								<span>{obj.type}</span>
							</div>
						</div>
					</div>
					<div>
						<span className={styles.button} onClick={() => editOptions(obj)}>
							<RiEditFill />
						</span>
						<span
							className={styles.button}
							onClick={() => deleteQuestionClick(obj._id)}
						>
							<MdDelete />
						</span>
					</div>
				</li>
			))}
		</ul>
	)
}
