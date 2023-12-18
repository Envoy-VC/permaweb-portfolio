await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	output: 'export',
	swcMinify: false,
	trailingSlash: true,
	images: {
		domains: ['arweave.net', 'cdn.hashnode.com'],
		unoptimized: true,
	},
};

export default config;
