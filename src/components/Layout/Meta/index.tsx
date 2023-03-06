import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { onlyText } from 'utils/clear-text'
import { siteName, siteTitle } from './meta.config'
import { ISeo } from './meta.interface'

const Meta: FC<ISeo> = ({ title, description, type = 'website' }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<Head>
			<title itemProp='headline'>{siteTitle(title)}</title>
			{description ? (
				<>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description)}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta property='og:type' content={type} />
					<meta property='og:locale' content='en_US' />
					<meta property='og:title' content={siteTitle(title)} />
					<meta property='og:url' content={currentUrl} />
					<meta property='og:site_name' content={siteName} />
					<meta property='og:description' content={onlyText(description)} />
				</>
			) : (
				<meta name='robots' content='noindex, nofollow' />
			)}
			<link rel='icon' href='/favicon.ico' />
		</Head>
	)
}

export default Meta
