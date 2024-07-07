/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        theme : "#7525DC",
        primary : "#fff",
        secondary: "#000",
        tertiary : "#ccc"
      }
    },
  },
  plugins: [],
}