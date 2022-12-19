import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/room/slice'
import quizReducer from './slices/quiz/slice'
import authReducer from './slices/auth/slice'
import userStateReducer from './slices/userState/slice'

export const store = configureStore({
	reducer: {
		userReducer,
		quizReducer,
		authReducer,
		userStateReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
