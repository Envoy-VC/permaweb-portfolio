import { NextSeo } from 'next-seo';

const SEO = () => {
	return (
		<NextSeo
			title='Envoy1084'
			description='Hi 👋, I am Vedant (aka Envoy_) and this is my Permaweb Page.'
			openGraph={{
				url: 'https://w3-starter.vercel.app',
				title: 'Envoy1084',
				description:
					'Hi 👋, I am Vedant (aka Envoy_) and this is my Permaweb Page.',
				images: [
					{
						url: 'https://g8way.io/EjBWx0Q55PKrSj5QkMkPfmr7P0WqQUls1Pl-yVWQ2U8',
						width: 1200,
						height: 630,
						alt: 'Envoy1084 OG Image',
						type: 'image/png',
					},
				],
				siteName: 'Envoy1084',
			}}
			twitter={{
				handle: '@Envoy_1084',
				site: '@Envoy_1084',
				cardType: 'summary_large_image',
			}}
		/>
	);
};

export default SEO;
