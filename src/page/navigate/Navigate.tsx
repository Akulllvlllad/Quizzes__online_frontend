import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Outlet } from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import { Link } from 'react-router-dom'
import logo from '../../img/kisspng-trivia-crack-clip-art-game-etermax-android-trivia-crack-5bb158fb24bef3.1895060415383493071505.png'
import AuthPopup from '../../ui/popup/AuthPopup'
import { useSelector } from 'react-redux'
import { isAuthSelect, userIdSelect } from '../../app/slices/auth/selectors'
import { useActions } from '../../hooks/useActions'
import { Header } from '../../ui/header/Header'

export const Dashboard = () => {
	const isAuth = useSelector(isAuthSelect)
	const userId = useSelector(userIdSelect)
	const { logout } = useActions()

	return (
		<>
			<div className='Navigate'>
				<div className='Navigate__bar'>
					<div className='bar'>
						<div className='bar__logo-wrapper'>
							<div className='bar__logo'>
								<img src={logo} alt='logo' />
							</div>
						</div>
						<div className='line' />

						<div className='auth'>
							{isAuth ? (
								<button
									className='header__button header__button_auth'
									onClick={() => logout()}
								>
									Выйти
								</button>
							) : (
								<AuthPopup />
							)}
						</div>

						<div className='line' />

						<nav className='bar__menu'>
							<ul className='menu'>
								<Link to='/'>
									<li className='menu__item'>Главная</li>
								</Link>

								<Link to='/admin'>
									<li className='menu__item'>Создать игру</li>
								</Link>

								<Link to='/room-create'>
									<li className='menu__item'>Создать комнату</li>
								</Link>
								{isAuth && (
									<Link to={`/admin-rooms/${userId}`}>
										<li className='menu__item'>Мои комнаты</li>
									</Link>
								)}
							</ul>
						</nav>

						<span className='version'>v1.0.0</span>
					</div>
				</div>
				{/* header */}
				<div className='Navigate__header'>
					<header className='header'>
						<Header />
						

						<Link to='main' className='header__button'>
							Войти в комнату
						</Link>
					</header>
				</div>
				{/* BODY */}
				<div className='Navigate__body'>
					<Outlet />
				</div>
			</div>
		</>
	)
}
