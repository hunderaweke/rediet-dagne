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
      },
      color:{
        '#obe4cc':'gradient-1',
        "#0093e0":'gradient-2'
      }
    },
  },
  plugins: [],
}