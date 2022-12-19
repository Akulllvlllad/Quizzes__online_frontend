import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import styles from './PageLoader.module.scss'
import {IoArrowBackCircle} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'


export const PageLoader = () => {
	const navigate = useNavigate()

	const toBackClick = () => {
		navigate(-1)
	}

	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				<IoArrowBackCircle className={styles.toBack} onClick={toBackClick} />
				<TailSpin
					height='80'
					width='80'
					color='#FF6400'
					ariaLabel='tail-spin-loading'
					radius='1'
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
				/>
			</div>
		</section>
	)
}
