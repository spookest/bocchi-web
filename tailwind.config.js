/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"noto-sans": "Noto Sans JP, sans-serif;",
			},
		},
	},
	plugins: [],
};
