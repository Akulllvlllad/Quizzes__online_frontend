import { createSlice } from '@reduxjs/toolkit'
import { fetchGetAllQuiz, fetchGetAllRooms, fetchGetMyRooms } from './asyncActions'
import { IInitialState } from './types'



const initialState: IInitialState = {
	myRooms: {
		isLoading: 'pending',
		state: [],
	},
	allQuiz: {
		isLoading: 'pending',
		state: [],
	},
	allRooms: {
		isLoading: 'pending',
		state: []
	}
}

export const userStateSlice = createSlice({
	name: 'userState',

	initialState,

	reducers: {},
	extraReducers: builder => {
		//============start fetchGetMyRooms ============>
		builder.addCase(fetchGetMyRooms.fulfilled, (state, action) => {
			state.myRooms.state = action.payload
			state.myRooms.isLoading = 'fulfilled'
		})
		builder.addCase(fetchGetMyRooms.pending, (state, action) => {
			state.myRooms.state = []
			state.myRooms.isLoading = 'pending'
		})
		builder.addCase(fetchGetMyRooms.rejected, (state, action) => {
			state.myRooms.state = []
			state.myRooms.isLoading = 'rejected'
		})
		//============end fetchGetMyRooms ==============>

		//============start fetchGetAllQuiz ============>
		builder.addCase(fetchGetAllQuiz.fulfilled, (state, action) => {
			state.allQuiz.state = action.payload
			state.allQuiz.isLoading = 'fulfilled'
		})
		builder.addCase(fetchGetAllQuiz.pending, (state, action) => {
			state.allQuiz.state = []
			state.allQuiz.isLoading = 'pending'
		})
		builder.addCase(fetchGetAllQuiz.rejected, (state, action) => {
			state.allQuiz.state = []
			state.allQuiz.isLoading = 'rejected'
		})
		//============end fetchGetMyRooms ==============>

		//============start fetchGetAllRooms ============>
				builder.addCase(fetchGetAllRooms.fulfilled, (state, action) => {
					state.allRooms.state = action.payload
					state.allRooms.isLoading = 'fulfilled'
				})
				builder.addCase(fetchGetAllRooms.pending, (state, action) => {
					state.allRooms.state = []
					state.allRooms.isLoading = 'pending'
				})
				builder.addCase(fetchGetAllRooms.rejected, (state, action) => {
					state.allRooms.state = []
					state.allRooms.isLoading = 'rejected'
				})
		//============end fetchGetAllRooms ==============>
	},
})

export const {} = userStateSlice.actions

export default userStateSlice.reducer
