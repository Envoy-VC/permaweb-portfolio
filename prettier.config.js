/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	trailingComma: 'es5',
	tabWidth: 1,
	semi: true,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
};

export default config;
