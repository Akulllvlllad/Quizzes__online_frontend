import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { IInitialState } from './types'
import {
	fetchCreate,
	fetchDelete,
	fetchGetAll,
	fetchGetOne,
	fetchUpdate,
} from './asyncActions'

const initialState: IInitialState = {
	
	oneQuiz: null,

	oneQuizLoading: 'loading',

	allQuizzes: [],

	allQuizzesLoading: 'loading',
}

export const quizSlice = createSlice({
	name: 'quiz',

	initialState,

	reducers: {},

	extraReducers: builder => {

		//============start fetchUpdate ============>
		builder.addCase(fetchUpdate.fulfilled, (state, action) => {
		

			toast.success('сохранено', {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		builder.addCase(fetchUpdate.rejected, (state, action) => {
			toast.error('ошибка', {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		//============end fetchUpdate <==============

		//============start fetchCreate ============>
		builder.addCase(fetchCreate.fulfilled, (state, action) => {
			

			toast.success('шаблон создан', {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		builder.addCase(fetchCreate.rejected, (state, action) => {
			toast.error('ошибка', {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		//============end fetchCreate <==============

		//============start fetchGetAll ============>
		builder.addCase(fetchGetAll.fulfilled, (state, action) => {
			state.allQuizzesLoading = 'fulfilled'

			state.allQuizzes = action.payload
		})
		builder.addCase(fetchGetAll.pending, (state, action) => {
			state.allQuizzesLoading = 'loading'

			state.allQuizzes = []
		})
		builder.addCase(fetchGetAll.rejected, (state, action) => {
			state.allQuizzesLoading = 'loading'

			state.allQuizzes = []
		})
		//============end fetchGetAll <==============

		//============start fetchGetOne ============>
		builder.addCase(fetchGetOne.fulfilled, (state, action) => {
			state.oneQuizLoading = 'fulfilled'

			state.oneQuiz = action.payload
		})
		builder.addCase(fetchGetOne.pending, (state, action) => {
			state.oneQuizLoading = 'loading'

			state.oneQuiz = null
		})
		builder.addCase(fetchGetOne.rejected, (state, action) => {
			state.oneQuizLoading = 'loading'

			state.oneQuiz = null
		})
		//============end fetchGetOne <==============

		//============start fetchDelete ============>
		builder.addCase(fetchDelete.fulfilled, (state, action) => {
			state.allQuizzes = state.allQuizzes.filter(
				obj => obj._id !== action.payload.id
			)
			toast.success(action.payload.data.message, {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		builder.addCase(fetchDelete.rejected, (state, action) => {
			toast.error('ошибка удаления', {
				position: 'bottom-center',
				pauseOnHover: false,
			})
		})
		//============end fetchDelete <==============
	},
})

export const {} = quizSlice.actions

export default quizSlice.reducer
