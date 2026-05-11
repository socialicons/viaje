/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#2B5B84', // Azul de tu folleto
        brandTeal: '#4DB6AC', // Turquesa de tu logo
      }
    },
  },
  plugins: [],
}