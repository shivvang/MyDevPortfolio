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
      borderRadius: {
        xl: "16px",
      },
      boxShadow: {
        inner: "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "gradient-primary-to-secondary":
          "linear-gradient(to right, #1A1A1A, #565656)",
      },
    },
  },
  plugins: [],
};
