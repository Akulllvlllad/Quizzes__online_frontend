import { createSlice } from '@reduxjs/toolkit'

import { socket } from '../../../hooks/useSocket'
import { IQuizWithId } from '../quiz/types'

import { fetchGetRoom, fetchGetTop, fetchGetUsersOnline } from './asyncActions'
import { IUserState, TRoom } from './types'

const initialState: IUserState = {
	usersInRoom: [],

	user: JSON.parse(sessionStorage.getItem('user') as string) || {
		userData: {
			name: null,
		},
	},
	_id: '',
	isAuth: false,
	room: {
		isLoading: 'pending',
		state: {
			_id: '',
			room: '',
			isStart: false,
			quizId: '',
			top: [],
			players: [],
			quiz: {} as IQuizWithId,
		},
	},
	topInRoom: [],
}

export const userSlice = createSlice({
	name: 'user',

	initialState,

	reducers: {
		setUsersInRoom: (state, action) => {
			state.usersInRoom = action.payload
		},
		setAuth: (state, action) => {
			socket.emit('ROOM:JOIN', action.payload)

			state.user = action.payload
			

			sessionStorage.setItem('user', JSON.stringify(state.user))
		},
		setIsAuth: (state, action) => {
			state.isAuth = action.payload.isAuth
			state._id = action.payload._id
		},
		setStart: (state, action) => {
			
			
			state.room.state!.isStart = action.payload
		},
	},
	extraReducers: builder => {
		//============start fetchLogin ============>
		builder.addCase(fetchGetRoom.fulfilled, (state, action) => {
			state.room.state = action.payload.data
			state.room.isLoading = 'fulfilled'
		})
		builder.addCase(fetchGetRoom.pending, (state, action) => {
			state.room.state = {
				_id: '',
				room: '',
				isStart: false,
				quizId: '',
				top: [],
				players: [],
				quiz: {} as IQuizWithId,
			}
			state.room.isLoading = 'pending'
		})
		builder.addCase(fetchGetRoom.rejected, (state, action) => {
			state.room.state = {
				_id: '',
				room: '',
				isStart: false,
				quizId: '',
				top: [],
				players: [],
				quiz: {} as IQuizWithId,
			}
			state.room.isLoading = 'pending'
		})
		//============end fetchLogin ==============>
		builder.addCase(fetchGetTop.fulfilled, (state, action) => {
			state.topInRoom = action.payload.data
		})

		builder.addCase(fetchGetUsersOnline.fulfilled, (state, action) => {
			state.usersInRoom = action.payload.data
		})
	},
})

export const { setUsersInRoom, setAuth, setIsAuth, setStart } =
	userSlice.actions

export default userSlice.reducer
