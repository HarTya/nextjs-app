import { FC } from 'react'
import { IButton } from './button.interface'
import styles from './Button.module.scss'

const Button: FC<IButton> = ({ text, color, size = 25 }) => {
	return (
		<button className={styles.button} style={{ color, fontSize: size }}>
			{text}
		</button>
	)
}

export default Button
