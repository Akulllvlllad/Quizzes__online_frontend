import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IQuizWithId } from "./types"




export const fetchCreate = createAsyncThunk(
	'quiz/fetchCreate',
	async (userId: string) => {

		console.log(userId)
		
		const { data } = await axios.post('http://localhost:3333/quiz-create', {
			userId: userId,
		})

		return data
	}
)

export const fetchDelete = createAsyncThunk(
	'quiz/fetchDelete',
	async (id: string) => {
		const { data } = await axios.delete(
			`http://localhost:3333/quiz-delete/${id}`
		)

		return { data, id }
	}
)

export const fetchUpdate = createAsyncThunk(
	'quiz/fetchUpdate',
	async (param: IQuizWithId) => {
		
		
		const { _id, ...body } = param

		const { data } = await axios.put(
			`http://localhost:3333/quiz-update/${_id}`,
			body
		)

		return data
	}
)

export const fetchGetOne = createAsyncThunk(
	'quiz/fetchGetOne',
	async (id: string) => {
		const { data } = await axios.put(`http://localhost:3333/quiz-update/${id}`)

		return data
	}
)

export const fetchGetAll = createAsyncThunk('quiz/fetchGetAll', async () => {
	const { data } = await axios.get(`http://localhost:3333/quiz-all`)

	return data
})
