/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Source Code Pro"', 'ui-monospace', 'monospace'],
        sans: ['"Source Code Pro"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#F2EEDB',
        ink: '#23211C',
        sky: '#21679B',
        link: '#B98A00',
        wall: '#EDE7F3',
        tea: '#2E9C9C',
        blu: '#3E6FD6',
        pur: '#8B5FC6',
        rud: '#C8503F',
      },
    },
  },
  plugins: [],
}

