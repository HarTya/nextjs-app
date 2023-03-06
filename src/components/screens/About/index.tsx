import Layout from '@/components/Layout'
import { FC } from 'react'
import { useStore } from 'store'
import styles from './About.module.scss'

const About: FC = () => {
	const isPageSwitching = useStore(state => state.isPageSwitching)

	return (
		<Layout title='About' description='About Page' page='about'>
			<div className={styles.about}>
				<h1 className={isPageSwitching ? 'disappearance' : styles.about_text}>
					NextJS Default App
				</h1>
			</div>
		</Layout>
	)
}

export default About
