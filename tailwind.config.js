/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#12ac8e',
        'primary-dark': '#0d846c',
        'primary-light': '#e9f7f7',
        secondary: '#fb923c',
      },
    },
  },
  plugins: [],
}
