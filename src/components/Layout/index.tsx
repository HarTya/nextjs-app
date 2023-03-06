import { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'
import { ILayout } from './layout.interface'
import Meta from './Meta'

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<Header {...rest} />
			<Footer {...rest} />
			<main>{children}</main>
		</>
	)
}

export default Layout
