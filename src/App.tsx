import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import { useActions } from './hooks/useActions'

import { Admin } from './page/admin/Admin'
import { CreateWrapper } from './page/create/Create'
import { Main } from './page/main/Main'
import { RoomWrapper } from './page/room/Room'
import { ToastContainer } from 'react-toastify'

import { QuizStartWrapper } from './page/quiz-start/QuizStart'
import { socket } from './hooks/useSocket'
import { Dashboard } from './page/navigate/Navigate'
import {

	RoomForPlayersWrapper,
} from './page/room/RoomForPlayers'
import { MyQuizRooms } from './page/my-quiz-rooms/MyQuizRooms'
import { Promo } from './page/promo/Promo'
import { CreateRoom } from './page/create-room/CreateRoom'

function App() {
	const { setStart, fetchGetMe } = useActions()

	React.useEffect(() => {
		socket.on('ROOM:CONNECTION', data => {
			setStart(data)
		})
		fetchGetMe()
	}, [])

	return (
		<div className='App'>
			<ToastContainer />

			<Routes>
				<Route path='/' element={<Dashboard />}>
					<Route path='/' element={<Promo />} />
					<Route path='/main' element={<Main />} />
					<Route path='/admin' element={<Admin />} />

					<Route path='/room-create' element={<CreateRoom />} />

					<Route path='/room/:room' element={<RoomForPlayersWrapper />} />
					<Route path='/admin-room1/:room' element={<RoomWrapper />} />
					<Route path='/create/:id' element={<CreateWrapper />} />
					<Route path='/quiz-start' element={<QuizStartWrapper />} />
					<Route path='/admin-rooms/:userId' element={<MyQuizRooms />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
