/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				tamil: ['"Noto Sans Tamil"', 'sans-serif']
			}
		}
	},
	plugins: []
};
