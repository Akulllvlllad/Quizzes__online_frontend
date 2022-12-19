import axios from 'axios'
import React from 'react'
import { IQuizWithId } from '../../app/slices/quiz/types'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = React.useState('')

	const [state, setState] = React.useState<IQuizWithId[]>([])

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	React.useEffect(() => {
		if (searchTerm){
			axios
				.get(`/quiz-search?searchTerm=${searchTerm}`)
				.then(({ data }) => setState(data))
		}
			
	}, [searchTerm])

		
		
	return { searchTerm, onChangeSearch, state, setSearchTerm }
}
