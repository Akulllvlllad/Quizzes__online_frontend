import React from 'react'
import { useSelector } from 'react-redux'
import { myIdSelect, usersInRoomSelect } from '../../app/slices/room/selectors'
import { TOnlineUser } from '../../app/slices/room/types'
import styles from './UserOnlineList.module.scss'
import cn from 'classnames'
import { log } from 'console'

export const UserOnlineList: React.FC = () => {
	const myId = useSelector(myIdSelect)
	const usersInRoom = useSelector(usersInRoomSelect)
	
	return (
		<ul className={styles.root}>
			<h3 className={styles.title}>Игроки: </h3>
			{usersInRoom.map(([id, obj]) => (
				<li key={id} className={cn(styles.item, { [styles.me]: myId === id })}>
					{obj.name || 'Неопознаный'}
					<span> {obj.points}</span>
				</li>
			))}
		</ul>
	)
}
