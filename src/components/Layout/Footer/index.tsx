import Button from '@/components/UI/Button'
import { COLORS } from 'config/color.config'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useStore } from 'store'
import { IFooter } from './footer.interface'
import styles from './Footer.module.scss'

const Footer: FC<IFooter> = ({ page }) => {
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
					? `${styles.footer_hide} ${styles.footer}`
					: styles.footer
			}
		>
			<div onClick={() => switchPage('/api/status')}>
				<Button
					color={isHomePage ? COLORS.primary : COLORS.additional}
					text='✔'
					size={20}
				/>
			</div>
		</div>
	)
}

export default Footer
