/** @type {import('tailwindcss').Config} */
// Design tokens mirrored from minutex.linkit360.ai
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: { xl: '1200px' },
    },
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#2E6CF6',
          50: '#EFF5FF',
          100: '#DCE8FF',
          200: '#B9D0FF',
          500: '#2E6CF6',
          600: '#1A53E0',
          700: '#1742B6',
        },
        ink: {
          DEFAULT: '#16233B',
          muted: '#5E6B81',
          soft: '#8A94A6',
        },
        sky: { hero: '#D7E8FA' },
      },
      borderRadius: {
        DEFAULT: '0.9rem',
      },
      boxShadow: {
        soft: '0 18px 50px -18px rgba(31,71,138,.22)',
        card: '0 24px 60px -28px rgba(20,41,82,.28)',
        brand: '0 10px 24px -8px rgba(46,108,246,0.6)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}
