import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosWithInstance from '../../axios/axios'

export const fetchGetMyRooms = createAsyncThunk(
	'userState/fetchGetMyRooms',
	async (id: string) => {
		const { data } = await axiosWithInstance.get(`/rooms/${id}`)

		return data
	}
)


export const fetchGetAllQuiz = createAsyncThunk(
	'userState/fetchGetAllQuiz',
	async () => {
		const { data } = await axiosWithInstance.get(`/quiz-all`)

		return data
	}
)




export const fetchGetAllRooms = createAsyncThunk(
	'userState/fetchGetAllRooms',
	async () => {
		const { data } = await axiosWithInstance.get(`/rooms-all`)

		return data
	}
)
