import { useState } from "react"
import {nanoid} from 'nanoid'
import { TQuestion } from "./create.interface"

const initialQuestion = {
	
	question: '',
	type: 0,
	rightAnswer: 0,
	options: [
		{ id: 0, placeholder: 'Ответ 1', value: '' },
		{ id: 1, placeholder: 'Ответ 2', value: '' },
		{ id: 2, placeholder: 'Ответ 3', value: '' },
		{ id: 3, placeholder: 'Ответ 4', value: '' },
	],
	questionImages: '',
}




export const useCreate = () => {

	const [option, setOptions] = useState({ ...initialQuestion, _id: nanoid(8) })


	const resetOption = () => {
		setOptions({ ...initialQuestion, _id: nanoid(8) })
	}

	const editOptions = (obj: TQuestion) => {
		setOptions(obj)
	}



	const onChangeOption = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
		id: number
	) => {
		setOptions(prev => ({
			...prev,
			options: prev.options.map(obj =>
				id === obj.id ? { ...obj, value: e.target.value } : { ...obj }
			),
		}))
	}

	const onChangeRightAnswer = (id: number) => {
		setOptions(prev => ({
			...prev,
			rightAnswer: id,
		}))
	}
	const onChangeQuestionImages = (path: string) => {
		setOptions(prev => ({
			...prev,
			questionImages: path,
		}))
	}

	const onChangeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setOptions(prev => ({
			...prev,
			question: e.target.value,
		}))
	}

	return {
		option,
		editOptions,
		onChangeOption,
		onChangeQuestionImages,
		onChangeRightAnswer,
		onChangeQuestion,
		resetOption,
	}
}
