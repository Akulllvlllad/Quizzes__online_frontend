import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getRoomSelect, isAuthSelect } from '../../app/slices/room/selectors'
import { QuizListWrapper } from '../../ui/quiz_list/QuizList'
import { UserOnlineList } from '../../ui/usersOnlineList/UserOnlineList'
import { useActions } from '../../hooks/useActions'
import { socket } from '../../hooks/useSocket'
import srcAudio from '../../img/0214-barabany-ritm-korotkij-1105473454_-mz30858zv86854.mp3'

export const RoomForPlayersWrapper = () => {
	const { setAuth, setIsAuth } = useActions()

	const isAuth = useSelector(isAuthSelect)

	const navigate = useNavigate()

	if (!isAuth) {
		navigate('/')
	}
	
	
	React.useEffect(() => {
		setAuth(JSON.parse(sessionStorage.getItem('inRoomData') as string))

		socket.on('ROOM:ME', data => {
			setIsAuth(data)
		})
	}, [])

	return isAuth ? <RoomForPlayers /> : null
}

export const RoomForPlayers = () => {
	const currentRoom = useSelector(getRoomSelect)
	

	const [isPlaying, setPlaying] = React.useState(false)

	const { fetchGetUsersOnline, setUsersInRoom, fetchGetRoom, setStart } =
		useActions()

	const { room } = useParams()

	React.useEffect(() => {
		fetchGetRoom(room as string)

		socket.emit('ROOM:GET', room)
		fetchGetUsersOnline(room as string)

		socket.on('JOIN', data => {
			setUsersInRoom(data)
		})
	}, [])

	React.useEffect(() => {
		setPlaying(currentRoom.state.isStart)
		
	}, [currentRoom])

	const stopPlaying = () => {
		setPlaying(false)
	}

	//============================
	const audioRef = useRef<HTMLAudioElement>(null)

	React.useEffect(() => {
		// audioRef.current?.play()
	}, [])
	return (
		<>
			<audio ref={audioRef}>
				<source src={srcAudio} type='audio/mp3' />
			</audio>

			{isPlaying ? (
				<QuizListWrapper stopPlaying={stopPlaying} />
			) : (
				<section className='RoomForPlayers'>
					<div className='RoomForPlayers__container'>
						<div className='RoomForPlayers__inner'>
							<div className='players'>
								<h2 className='players__title'>Все игроки</h2>
								<div className='line line_players' />

								<ul className='players__list'>
									<UserOnlineList />
								</ul>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	)
}
