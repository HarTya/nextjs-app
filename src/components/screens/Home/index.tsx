import Layout from '@/components/Layout'
import { FC } from 'react'
import { useStore } from 'store'
import styles from './Home.module.scss'

const Home: FC = () => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	return (
		<Layout title='Home' description='Home Page'>
			<div className={`${styles.home} screen`}>
				<h1 className={isPageSwitching ? 'hide' : null}>Hello World!</h1>
			</div>
		</Layout>
	)
}

export default Home
