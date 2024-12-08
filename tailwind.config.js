/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      container: "1320px",
    },
    Usercontainer: {
      container: "1100px",
      ml:"12px",
    },
    transitionDuration: {
      '2000': '2000ms',
    }
  },
  plugins: [],
}