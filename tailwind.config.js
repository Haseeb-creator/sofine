import { colors } from './src/theme/colors.js';
import { typography } from './src/theme/typography.js';
import { spacing } from './src/theme/spacing.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Prepare for future dark mode support
  theme: {
    extend: {
      colors,
      fontFamily: typography.fonts,
      fontSize: typography.scale,
      spacing: spacing.section,
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
