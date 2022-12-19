export interface IInitialState {
	myRooms: {
		isLoading: string
		state: IRoom[]
	}
	allQuiz: {
		isLoading: string
		state: IQuiz[]
	}
	allRooms: {
		isLoading: string
		state: IRoom[]
	}
}

interface IRoom {
	_id: string
	room: string
	quizId: IQuiz
	isStart: boolean
	players: []
	top: []
	createdAt: string
	updatedAt: string
	creatorId: {
		_id: string

		name: string
	}
}

interface IQuiz {
	_id: string
	title: string
	imgPath: string
	settings: {
		type: string
		time: number
		isStart: boolean
	}
	questions: []
}
