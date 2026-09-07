/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071421',
          900: '#0B2037',
          800: '#123453',
          700: '#1C496F'
        },
        gold: {
          300: '#DFC391',
          400: '#C9A568',
          500: '#B78E4F'
        },
        mist: '#F3F6FA'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        soft: '0 20px 70px rgba(11,32,55,.10)',
        glow: '0 0 60px rgba(201,165,104,.20)'
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at 30% 20%, rgba(201,165,104,.15), transparent 35%), radial-gradient(circle at 80% 10%, rgba(18,52,83,.18), transparent 35%)'
      }
    }
  },
  plugins: []
}
