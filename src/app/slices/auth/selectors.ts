import { RootState } from "../../store";

export const isAuthSelect = (state: RootState) => state.authReducer.isAuth
export const userIdSelect = (state: RootState) => state.authReducer._id
export const userNameSelect = (state: RootState) => state.authReducer.name