/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        source: ['"Source Sans Pro"', "sans-serif"],
        avenir: ['"Nunito"', "sans-serif"],
        futura: ['"Futura"', "sans-serif"],
      },
      colors: {
        primary: "#1A1A1A", // Royal black
        secondary: "#565656", // Elegant darker gray
        tertiary: "#EAEAEA", // Softer, muted off-white
        white: "#F2F2F2", // Creamy white
      },
    },
  },
  plugins: [],
};
