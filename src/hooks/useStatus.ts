import axios from 'axios'
import { API_STATUS } from 'config/api.config'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { IStatus, IStatusError } from 'types/status.interface'

export const useStatus = () => {
	const [statusMessage, setStatusMessage] = useState('')

	const { isLoading } = useQuery(
		'status',
		() => axios.get<IStatus>(API_STATUS).then(res => res.data),
		{
			onSuccess: data => {
				setStatusMessage(data.message)
			},
			onError: (error: IStatusError) => {
				setStatusMessage(error.message)
			}
		}
	)

	return { isLoading, statusMessage }
}
