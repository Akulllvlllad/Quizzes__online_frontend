import { RootState } from "../../store"


export const allQuizzesSelect = (state: RootState) =>
	state.quizReducer.allQuizzes
export const allQuizzesLoadingSelect = (state: RootState) =>
	state.quizReducer.allQuizzesLoading

export const oneQuizSelect = (state: RootState) => state.quizReducer.oneQuiz
export const oneQuizLoadingSelect = (state: RootState) =>
	state.quizReducer.oneQuizLoading
