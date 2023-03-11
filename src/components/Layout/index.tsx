import { HOME_PAGE } from 'config/pages.config'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { useStore } from 'store'
import Footer from './Footer'
import Header from './Header'
import { ILayout } from './layout.interface'
import Meta from './Meta'

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	const setIsPageSwitching = useStore(state => state.setIsPageSwitching)

	const { push, asPath } = useRouter()
	const isHomePage = asPath === HOME_PAGE

	function switchPage(href: string) {
		setIsPageSwitching(true)
		setTimeout(() => {
			push(href)
			setIsPageSwitching(false)
		}, 1000)
	}

	return (
		<>
			<Meta {...rest} />
			<Header isHomePage={isHomePage} switchPage={switchPage} />
			<main>{children}</main>
			<Footer isHomePage={isHomePage} />
		</>
	)
}

export default Layout
