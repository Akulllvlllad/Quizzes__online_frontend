import{ useEffect, useState, RefObject } from 'react'

export const usePopup = ( Ref: RefObject<HTMLDivElement> ) => {

	const [isVisible, setVisible] = useState(false)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (Ref.current && !event.composedPath().includes(Ref.current)) {
				setVisible(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)

		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])

	const open = () => {
		setVisible(true)
	}
	const close = () => {
		
		
		setVisible(false)
	}

	return { isVisible, open, close }
}
