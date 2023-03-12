import { COLORS } from 'config/color.config'
import { useStatus } from 'hooks/useStatus'
import { FC } from 'react'
import { useStore } from 'store'
import { IFooter } from './footer.interface'
import styles from './Footer.module.scss'

const Footer: FC<IFooter> = ({ isHomePage }) => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	const { isLoading, statusMessage } = useStatus()

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
				{isLoading ? 'Loading...' : statusMessage}
			</span>
		</div>
	)
}

export default Footer
