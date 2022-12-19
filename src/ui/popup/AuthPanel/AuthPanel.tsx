import { SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from '../../../hooks/useActions'
import { PFetchLogin } from '../../../app/slices/auth/types'
import styles from './AuthPanel.module.scss'



export const AuthPanel = () => {


	const { fetchLogin } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<PFetchLogin>()
	const onSubmit: SubmitHandler<PFetchLogin> = data => {
		fetchLogin(data)
	}




	return (
		<form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.title}>Заходи 😋</h2>
			<div className='line' />
			<div className={styles.fields}>
				<div className={styles.field}>
					<input
						{...register('name', { required: true })}
						type='text'
						placeholder='Имя'
					/>
				</div>
				<div className={styles.field}>
					<input
						{...register('password', { required: true })}
						type='password'
						placeholder='Пароль'
					/>
				</div>
			</div>
			<div>
				<button className={styles.submit}>Войти</button>
				<div className='line' />
				<p className={styles.warning}>
					! ! ! К сожалению регистрация на сайте временно отключена, приношу
					извинения...
				</p>
			</div>
			{(errors.name || errors.password)  && <span className={styles.error}>Все поля должны быть заполнены</span>}
		</form>
	)
}
