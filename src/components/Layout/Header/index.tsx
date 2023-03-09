import Button from '@/components/UI/Button'
import { COLORS } from 'config/color.config'
import { ABOUT_PAGE, HOME_PAGE } from 'config/pages.config'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useStore } from 'store'
import { IHeader } from './header.interface'
import styles from './Header.module.scss'

const Header: FC<IHeader> = ({ isHomePage, switchPage }) => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	const { asPath } = useRouter()

	return (
		<div
			className={
				isPageSwitching
					? `${styles.header_hide} ${styles.header}`
					: styles.header
			}
		>
			<span
				style={{ color: isHomePage ? COLORS.primary : COLORS.additional }}
				className={styles.header_text}
			>
				{asPath}
			</span>
			{isHomePage ? (
				<div onClick={() => switchPage(ABOUT_PAGE)}>
					<Button color={COLORS.primary} text='>' />
				</div>
			) : (
				<div onClick={() => switchPage(HOME_PAGE)}>
					<Button color={COLORS.additional} text='<' />
				</div>
			)}
		</div>
	)
}

export default Header
