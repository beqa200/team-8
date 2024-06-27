/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#2E2E2E",
      },
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        base: "14px",
      },
      fontWeight: {
        light: 300,
      },
      lineHeight: {
        base: "21px",
      },
    },
  },
  plugins: [],
};
