import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { socket } from '../../hooks/useSocket'
import { UserOnlineList } from '../../ui/usersOnlineList/UserOnlineList'
import { isAuthSelect } from '../../app/slices/room/selectors'
import { PageLoader } from '../../ui/preloader/PageLoader'
import { Information } from '../../ui/information/Information'
import { PanelControl } from '../../ui/panel-Control/PanelControl'
import { userNameSelect } from '../../app/slices/auth/selectors'

export const RoomWrapper = () => {
	const { setAuth, setIsAuth } = useActions()
	const { room } = useParams()
	const isAuth = useSelector(isAuthSelect)
	const userName = useSelector(userNameSelect)

	React.useEffect(() => {
		if (userName) setAuth({ room: room, name: userName })

		socket.on('ROOM:ME', data => {
			setIsAuth(data)
		})
	}, [userName])

	return isAuth && room ? <Room room={room} /> : <PageLoader />
}

export const Room: React.FC<{ room: string }> = ({ room }) => {
	const { fetchGetUsersOnline, setUsersInRoom, fetchGetRoom } = useActions()

	React.useEffect(() => {
		fetchGetRoom(room as string)

		socket.emit('ROOM:GET', room)
		fetchGetUsersOnline(room as string)

		socket.on('JOIN', data => {
			setUsersInRoom(data)
		})
	}, [])

	return (
		<section className='main'>
			<div className='room'>
				<div className='room__users'>
					<UserOnlineList />
				</div>
				<div className='room__title'>
					<PanelControl />
				</div>
				<div className='room__body'>
					<Information />
				</div>
			</div>
		</section>
	)
}
