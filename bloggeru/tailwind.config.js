/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': '#31212A',
        'honey': '#FFBE33',
        'lilac': '#C9C9EE',
        'sky-blue': '#65DEF1',
      }
    },
  },
  plugins: [],
}