import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchGetRoom = createAsyncThunk(
	'user/fetchGetRoom',
	async (id: string) => {
		const { data } = await axios.get(`/room-current/${id}`)

		return { data }
	}
)

export const fetchGetTop = createAsyncThunk('user/fetchGetTop', async (id: string) => {
	const { data } = await axios.get(`/top/${id}`)

	return { data }
})

export const fetchGetUsersOnline = createAsyncThunk(
	'user/fetchGetUsersOnline',
	async (id: string) => {
		

		const { data } = await axios.get(`http://localhost:3333/room/${id}`)

		return { data }
	}
)
export const fetchUpdate = createAsyncThunk(
	'user/fetchGetUsersOnline',
	async (id: string) => {
		
		const { data } = await axios.get(`http://localhost:3333/room/${id}`)

		return { data }
	}
)
