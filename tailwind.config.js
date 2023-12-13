/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				fixedsys: ["Fixedsys", "sans-serif"], // Имя 'MyCustomFont' должно соответствовать тому, что указано в @font-face
			},
		},
		colors: {
			background: "#207476",
			lightgray: "#C0C0C0",
			black: "#000000",
			white: "#FFFFFF",
			blue: "#1900D8",
			purple: "#8378DE",
			deepblue: "#110095",
			gray: "#A7A7A7",
			darkgray: "#767676",
			slightgray: "#DFDFDF",
			almostwhite: "#F4F4F4",
		},
	},
};
