/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dutch-white': '#E2DBBE',
        'spring-bud': '#D5D6AA',
        'cambridge-blue': '#9DBBAE',
        'superior-blue': '#769FB6',

        'coffee': '#31212A',
        'honey': '#FFBE33',
        'lilac': '#C9C9EE',
        'sky-blue': '#65DEF1',

      }
    },
  },
  plugins: [],
}