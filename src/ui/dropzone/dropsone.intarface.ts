export interface IMediaResponse {
	status: string
	message: string
	data: [
		{
			_id: number
			name: string
			path: string
			size: string
		}
	]
}
