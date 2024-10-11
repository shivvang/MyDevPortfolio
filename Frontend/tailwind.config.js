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
        primary: "#222222",
        secondary: "#7B7B7B",
        tertiary: "#F8F8F8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
