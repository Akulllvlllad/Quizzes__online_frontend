import { createSlice } from '@reduxjs/toolkit'
import { fetchGetMe, fetchLogin } from './authActions'
import { IInitialState } from './types'

const initialState: IInitialState = {
	isLoading: 'pending',
	isAuth: false,
	_id: '',
	name: '',
}

export const authSlice = createSlice({
	name: 'auth',

	initialState,

	reducers: {
		logout: state => {
			window.localStorage.removeItem('token')
			state.name = ''
			state._id = ''
			state.isAuth = false
			state.isLoading = 'fulfilled'
		},
	},
	extraReducers: builder => {
		//============start fetchLogin ============>
		builder.addCase(fetchLogin.fulfilled, (state, action) => {
			state.name = action.payload.name
			state._id = action.payload._id
			state.isAuth = true
			state.isLoading = 'fulfilled'
		})
		builder.addCase(fetchLogin.pending, (state, action) => {
			state.name = ''
			state._id = ''
			state.isAuth = false
			state.isLoading = 'pending'
		})
		builder.addCase(fetchLogin.rejected, (state, action) => {
			state.name = ''
			state._id = ''
			state.isAuth = false
			state.isLoading = 'pending'
		})
		//============end fetchLogin ==============>
		//=========================================
		//============start fetchGetMe ============>
		builder.addCase(fetchGetMe.fulfilled, (state, action) => {
			state.name = action.payload.name
			state._id = action.payload._id
			state.isAuth = true
			state.isLoading = 'fulfilled'
		})
		builder.addCase(fetchGetMe.pending, (state, action) => {
			state.name = ''
			state._id = ''
			state.isAuth = false
			state.isLoading = 'pending'
		})
		builder.addCase(fetchGetMe.rejected, (state, action) => {
			state.name = ''
			state._id = ''
			state.isAuth = false
			state.isLoading = 'fulfilled'
		})
		//============end fetchGetMe ============>
	},
})

export const { logout } = authSlice.actions

export default authSlice.reducer
