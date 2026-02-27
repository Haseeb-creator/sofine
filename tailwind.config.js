/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF8A00',
          darkOrange: '#E67A00',
          green: '#4CAF50',
          darkGreen: '#388E3C',
          yellow: '#FFC107',
          lightYellow: '#FFF8E1',
          bg: '#FAFAFA',
          dark: '#2A2A2A',
          muted: '#757575',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
