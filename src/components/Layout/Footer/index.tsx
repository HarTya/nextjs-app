import Button from '@/components/UI/Button'
import { COLORS } from 'config/color.config'
import { STATUS_PAGE } from 'config/pages.config'
import { FC } from 'react'
import { useStore } from 'store'
import { IFooter } from './footer.interface'
import styles from './Footer.module.scss'

const Footer: FC<IFooter> = ({ isHomePage, switchPage }) => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	return (
		<div
			className={
				isPageSwitching
					? `${styles.footer_hide} ${styles.footer}`
					: styles.footer
			}
		>
			<div onClick={() => switchPage(STATUS_PAGE)}>
				<Button
					color={isHomePage ? COLORS.primary : COLORS.additional}
					text='Status'
					size={20}
				/>
			</div>
		</div>
	)
}

export default Footer
