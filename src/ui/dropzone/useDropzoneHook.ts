import axios from 'axios'
import React from 'react'
import { IMediaResponse } from './dropsone.intarface'

export const DropzoneHook = async (file: File[]) => {
	if (!file?.length) return

	const formData = new FormData()
	formData.append('media', file[0])
	
	
	
	const { data } = await axios.post<IMediaResponse>(
		'http://localhost:3333/multiple',
		formData,
		{
			headers: { 'Content-Type': 'multipart/form-data' },
		}
	)

return { data }
	
}
