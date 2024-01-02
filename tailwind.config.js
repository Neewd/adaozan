/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		colors: {
			brown: {
				100: "#8c3c31",
			},
			cream: {
				100: "#fff8f3",
			},
			beige: {
				100: "#fff8f3",
			},
		},
		fontFamily: {
			heading: ["Optima"],
		},
	},
	plugins: [],
};
