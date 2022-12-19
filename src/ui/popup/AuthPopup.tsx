import { Dialog, Transition } from '@headlessui/react'
import React from 'react'


import { AuthPanel } from './AuthPanel/AuthPanel'
import styles from './AuthPopup.module.scss'
import { usePopup } from './usePopup'

export default function AuthPopup() {
	const { isOpen, closeModal, handleCloseModal } = usePopup()

	
	return (
		<>
			<button
				className='header__button header__button_auth'
				onClick={handleCloseModal}
			>
				Войти
			</button>
			<Transition show={isOpen} as={React.Fragment}>
				<Dialog onClose={closeModal} className={styles.modalWrapper}>
					<Transition.Child
						enter='transition duration-100 ease-out'
						enterFrom='transform scale-95 opacity-0'
						enterTo='transform scale-100 opacity-100'
						leave='transition duration-75 ease-out'
						leaveFrom='transform scale-100 opacity-100'
						leaveTo='transform scale-95 opacity-0'
						as={React.Fragment}
					>
						<Dialog.Panel className={styles.modal}>
							<AuthPanel />
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	)
}
