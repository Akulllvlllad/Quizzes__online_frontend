export type PFetchLogin = {
	name: string
	password: string
}

export interface IInitialState {
	isLoading: string
	isAuth: boolean
	_id: string
	name: string
}