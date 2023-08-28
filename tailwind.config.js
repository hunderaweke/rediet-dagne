/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'brand':[ 'Zen Tokyo Zoo', 'cursive'],
        'normal':['Roboto Mono','monospace'],
      }
    },
  },
  plugins: [],
}