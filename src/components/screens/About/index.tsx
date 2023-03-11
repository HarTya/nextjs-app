import Layout from '@/components/Layout'
import { FC } from 'react'
import { useStore } from 'store'
import styles from './About.module.scss'

const About: FC = () => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	return (
		<Layout title='About' description='About Page'>
			<div className={`${styles.about} screen`}>
				<h1 className={isPageSwitching ? 'hide' : null}>NextJS Default App</h1>
			</div>
		</Layout>
	)
}

export default About
