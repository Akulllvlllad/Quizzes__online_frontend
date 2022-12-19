import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
	fetchGetRoom,
	fetchGetUsersOnline,
	fetchGetTop,
} from '../app/slices/room/asyncActions'

import {
	setUsersInRoom,
	setAuth,
	setIsAuth,
	setStart,
} from '../app/slices/room/slice'

import {
	fetchCreate,
	fetchUpdate,
	fetchGetAll,
	fetchDelete,
	fetchGetOne,
} from '../app/slices/quiz/asyncActions.ts'



import { fetchLogin, fetchGetMe } from '../app/slices/auth/authActions'

import {logout} from '../app/slices/auth/slice'


import {
	fetchGetMyRooms,
	fetchGetAllQuiz,
	fetchGetAllRooms,
} from '../app/slices/userState/asyncActions'



const useAppDispatch = () => useDispatch()

const AllActions = {
	fetchGetAllRooms,
	fetchGetAllQuiz,
	fetchGetMyRooms,
	logout,
	fetchGetMe,
	fetchLogin,
	setStart,
	fetchGetTop,
	setIsAuth,
	fetchGetRoom,
	setUsersInRoom,
	fetchGetUsersOnline,
	fetchCreate,
	fetchUpdate,
	fetchGetAll,
	fetchDelete,
	fetchGetOne,
	setAuth,
}

export const useActions = () => {
	const appDispatch = useAppDispatch()
	return bindActionCreators(AllActions, appDispatch)
}
