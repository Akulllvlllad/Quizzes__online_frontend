import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosWithInstance from '../../axios/axios'
import { PFetchLogin } from './types'




export const fetchLogin = createAsyncThunk(
	'auth/fetchGetOne',
	async (param: PFetchLogin) => {
		const { data } = await axiosWithInstance.post(`auth/login`, param)
		window.localStorage.setItem('token', data.token)
		
		return data
	}
)

export const fetchGetMe = createAsyncThunk('auth/fetchGetMe', async () => {
	const { data } = await axiosWithInstance.get(`auth/me`)

	return data
})
