/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // O ajusta según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        purpleCustom: '#8e44ad', // ejemplo si quieres un morado personalizado
        silverGradient: {
          100: '#d1d1d1',
          200: '#c0c0c0',
          300: '#a9a9a9',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
