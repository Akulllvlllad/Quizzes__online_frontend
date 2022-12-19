import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { isStartSelect } from '../../app/slices/room/selectors'
import { socket } from '../../hooks/useSocket'
import styles from './PanelControl.module.scss'

export const PanelControl = () => {
	const { room } = useParams()

	const isStart = useSelector(isStartSelect)

	const onStartClick = () => {
		socket.emit('ROOM:START', room)

		toast.success('Игра запущена', {
			position: 'bottom-center',
			pauseOnHover: false,
		})
	}

	const onStopClick = () => {
		socket.emit('ROOM:STOP', room)

		toast.success('Игра остановлена', {
			position: 'bottom-center',
			pauseOnHover: false,
		})
	}
	
	
	return (
		<div className={styles.root}>
			<p className={styles.text}>
				{isStart ? 'Игра идет' : 'Игра еще не началась'}
			</p>
			<div>
				<button
					className={styles.btn}
					onClick={onStartClick}
					disabled={isStart}
				>
					Начать
				</button>
				<button
					className={styles.btn}
					onClick={onStopClick}
					disabled={!isStart}
				>
					Стоп
				</button>
			</div>
		</div>
	)
}
