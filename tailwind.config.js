/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,tsx,ts}'
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
  plugins: [
    require('flowbite/plugin'),
  ],
}