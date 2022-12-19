import styles from './dropzone.module.scss'
import cn from 'classnames'
import React, { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { RiDragDropFill } from 'react-icons/ri'
import { DropzoneHook } from './useDropzoneHook'

const Dropzone: FC<{
	onChangesPath: (path: string) => void
	path: string
}> = ({ onChangesPath, path }) => {
	const [img, setImg] = React.useState(path)
	const onDrop = useCallback(async (acceptedFiles: any) => {
		const res = await DropzoneHook(acceptedFiles)

		if (res) {
			setImg(res?.data.data[0].path)
			onChangesPath(res?.data.data[0].path)
		}
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
	})

	return (
		<div className={cn(styles.root, { [styles.photos]: true })}>
			{!!img && (
				<img
					className={cn(styles.img, { [styles.hoverImg]: isDragActive })}
					src={`http://localhost:3333${img}`}
					alt={img}
				/>
			)}
			<div {...getRootProps()} className={styles.dropzone}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p className={cn(styles.massage, styles.active)}>
						<RiDragDropFill className={styles.icon} />
					</p>
				) : (
					<p className={styles.massage}>
						{!!!img && <RiDragDropFill className={styles.icon} />}
					</p>
				)}
			</div>
		</div>
	)
}

export default Dropzone
