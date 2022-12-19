import { RootState } from "../../store";

export const myRoomsSelect = (state: RootState) => state.userStateReducer.myRooms

export const allQuizSelect = (state: RootState) => state.userStateReducer.allQuiz
export const allRoomsSelect = (state: RootState) => state.userStateReducer.allRooms