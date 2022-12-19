import { RootState } from "../../store"

export const usersInRoomSelect = (state: RootState) =>
	state.userReducer.usersInRoom
export const isAuthSelect = (state: RootState) => state.userReducer.isAuth
export const getRoomSelect = (state: RootState) => state.userReducer.room
export const getCurrentQuizSelect = (state: RootState) => state.userReducer.room
export const topInRoomSelect = (state: RootState) => state.userReducer.topInRoom
export const myIdSelect = (state: RootState) => state.userReducer._id
export const isStartSelect = (state: RootState) =>  state.userReducer.room.state?.isStart

		
	
	

