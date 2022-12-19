import { IQuizWithId } from "../quiz/types";

export type TOnlineUser = [
	string,
	{ name: string; id: string; room: string; points: number }
]

export type TRoom = {
	_id: string
	room: string
	isStart: boolean | any
	quizId: string
	top: []
	players: []
	quiz: IQuizWithId
}

export interface IUserState {
	user: {
		userData: {
			name: string | null
		}
	}
	isAuth: boolean
	usersInRoom: TOnlineUser[]
	_id: string
	room: {
		isLoading: string
		state: TRoom 
	}
	topInRoom: { name: string; _id: string; rating: number }[] | []
}
