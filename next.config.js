await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
	output: 'export',
	reactStrictMode: true,
	assetPrefix: './',
	basePath: '',
	trailingSlash: true,
	images: {
		domains: ['arweave.net'],
	},
};

export default config;
