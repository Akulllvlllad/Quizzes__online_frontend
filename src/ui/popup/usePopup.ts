import { useState } from 'react'




export const usePopup = () => {
	let [isOpen, setIsOpen] = useState(false)

	const closeModal = () => {
		setIsOpen(false)
	}

	const handleCloseModal = () => {
		setIsOpen(true)
	}


	return { isOpen, closeModal, handleCloseModal }
}
