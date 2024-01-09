module.exports = {
	darkMode: false, // Or remove this line
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			'bg-color': '#D0EFDB',
			'text-color': '#2A6B41',
		  }
		}
	  },
	  variants: {},
	plugins: [require('tailwindcss-safe-area')],
}
