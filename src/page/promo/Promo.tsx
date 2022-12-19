import React from 'react'
import { AllRooms } from '../../ui/all-rooms/AllRooms'
import { AllQuiz } from '../../ui/all-quiz/AllQuiz'

export const Promo = () => {
	return (
		<section className='Promo'>
			<div className='Promo__container'>
				<div className='Promo__inner'>
					<div>
						<AllQuiz />
					</div>
					<div>
						<AllRooms />
					</div>
				</div>
			</div>
		</section>
	)
}
