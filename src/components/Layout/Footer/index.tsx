import axios, { AxiosError } from 'axios'
import { API_STATUS } from 'config/api.config'
import { COLORS } from 'config/color.config'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import { useStore } from 'store'
import { IStatus } from 'types/status.interface'
import { IFooter } from './footer.interface'
import styles from './Footer.module.scss'

const Footer: FC<IFooter> = ({ isHomePage }) => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	const [status, setStatus] = useState('')

	const { isLoading } = useQuery(
		'status',
		() => axios.get(API_STATUS).then(res => res.data),
		{
			onSuccess: (data: IStatus) => {
				setStatus(data.message)
			},
			onError: (error: AxiosError) => {
				if (axios.isAxiosError(error)) {
					setStatus(error.message)
				} else {
					setStatus('Unknown Error')
				}
			}
		}
	)

	return (
		<div
			className={
				isPageSwitching
					? `${styles.footer_hide} ${styles.footer}`
					: styles.footer
			}
		>
			<span
				style={{ color: isHomePage ? COLORS.primary : COLORS.additional }}
				className={styles.footer_text}
			>
				{isLoading ? 'Loading...' : status}
			</span>
		</div>
	)
}

export default Footer
