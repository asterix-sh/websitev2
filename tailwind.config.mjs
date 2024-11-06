/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			properties: {
			'scroll-behavior': 'smooth'
			},
			colors: {
			'dark': '#181a1b',
			'primary': '#f43f5e',
			'alt-bg': '#f1efef',
			'selected': '#e2ddde',
			},
			animation: {
			'spin-slow': 'spin 10s linear infinite',
			}
		},
	},
	plugins: [],
}