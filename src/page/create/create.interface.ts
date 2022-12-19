


export type TQuestion = {
	_id: any
	question: string
	type: number
	rightAnswer: number
	options: TOptions[]
	questionImages: string
}
export type TSettings = {
	type: string
	time: number
	isStarting: false
}

export type TOptions = {
	id: number
	placeholder: string
	value: string
}



export interface IQuiz {
	title: string
	imgPath: string
	settings: TSettings
	quiz: TQuestion[]
}