import Button from '@/components/UI/Button'
import { COLORS } from 'config/color.config'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useStore } from 'store'
import { IHeader } from './header.interface'
import styles from './Header.module.scss'

const Header: FC<IHeader> = ({ page }) => {
	const [isPageSwitching, setIsPageSwitching] = useStore(state => [
		state.isPageSwitching,
		state.setIsPageSwitching
	])
	const router = useRouter()
	const isHomePage = page === 'home'

	function switchPage(href: string) {
		setIsPageSwitching(true)
		setTimeout(() => {
			router.push(href)
			setIsPageSwitching(false)
		}, 1000)
	}

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
				{router.asPath}
			</span>
			{isHomePage ? (
				<div onClick={() => switchPage('/about')}>
					<Button color={COLORS.primary} text='>' />
				</div>
			) : (
				<div onClick={() => switchPage('/')}>
					<Button color={COLORS.additional} text='<' />
				</div>
			)}
		</div>
	)
}

export default Header
