/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050505',
          800: '#0B0B0B',
          700: '#101010',
          600: '#151515',
          500: '#1B1B1B',
        },
        primary: {
          500: '#E50914',
          400: '#FF2E2E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B5B5B5',
          tertiary: '#7A7A7A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 4px 20px rgba(229, 9, 20, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
