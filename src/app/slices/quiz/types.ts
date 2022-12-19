import { TQuestion } from '../../../page/create/create.interface'

export interface IQuizWithId {
	_id: string

	title: string

	imgPath: string

	settings: {
		time: number

		type: string

		isStart: boolean
	}

	questions: TQuestion[]
}

export interface IInitialState {


	oneQuiz: IQuizWithId | null

	oneQuizLoading: string

	allQuizzes: IQuizWithId[]

	allQuizzesLoading: string
}
