import React, { useEffect, useRef, useState } from 'react'
import { IQuizWithId } from '../../app/slices/quiz/types'
import { usePopup } from '../../hooks/usePopup'
import { useSearch } from '../../ui/header/useSearch'

export const CreateRoom = () => {
	const [isCreating, setIsCreating] = useState(true)

	const searchRef = useRef(null)

	const [currentQuiz, setCurrentQuiz] = useState<IQuizWithId | null>(null)

	const changeCurrentQuiz = (quiz: IQuizWithId) => {
		close()
		setCurrentQuiz(quiz)
		setSearchTerm(quiz.title)
		
	}

	const { isVisible, open, close } = usePopup(searchRef)

	const { searchTerm, onChangeSearch, state, setSearchTerm } = useSearch()
	

	
	

	
	
	return (
		<section className='CreateRoom'>
			<div className='CreateRoom__container'>
				<div className='CreateRoom__inner'>
					{isCreating ? (
						<div className='Creating'>
							<ol>
								<li>
									Выбрать викторину для игры
									<div
										className='Creating__searching'
										ref={searchRef}
										onClick={open}
									>
										<div className='searching'>
											<label className='header__input searching__input'>
												<input
													placeholder='Выбрать квиз'
													onChange={onChangeSearch}
													value={searchTerm}
												/>
											</label>

											{isVisible && state.length > 0 && (
												<ul className='searching__list'>
													{state.map(quiz => (
														<li
															className='searching__item'
															key={quiz._id}
															onClick={() => changeCurrentQuiz(quiz)}
														>
															{quiz.title}
														</li>
													))}
												</ul>
											)}
										</div>
									</div>
								</li>
								<li>Выбрать номер комнаты</li>
							</ol>
						</div>
					) : (
						<div className=''></div>
					)}
				</div>
			</div>
		</section>
	)
}
