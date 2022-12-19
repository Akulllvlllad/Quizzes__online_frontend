import { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { usePopup } from '../../hooks/usePopup'

import { Search } from './search/search'
import { useSearch } from './useSearch'

export const Header = () => {
	const { searchTerm, onChangeSearch, state } = useSearch()

	const searchRef = useRef<HTMLDivElement>(null)

	const { isVisible, open } = usePopup(searchRef)

	return (
		<div ref={searchRef} className='header__search' onClick={open}>
			<label className='header__input'>
				<FiSearch className='header__icon' />
				<input
					placeholder='Поиск'
					value={searchTerm}
					onChange={onChangeSearch}
				/>
			</label>
			{searchTerm && isVisible && <Search state={state} />}
		</div>
	)
}
