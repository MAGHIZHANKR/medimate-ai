export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff9f9',
          100: '#d5eeef',
          200: '#a9dcde',
          300: '#71c2c5',
          400: '#3ea2a6',
          500: '#1f8689',
          600: '#166b6f',
          700: '#145659',
          800: '#123f42',
          900: '#0f2f31',
        },
        mint: {
          50: '#f2faf4',
          100: '#dff4e6',
          200: '#bde8ca',
          300: '#92d6a8',
          400: '#61bb80',
          500: '#3ea061',
        },
        canvas: '#f5f8f8',
        surface: '#ffffff',
        line: '#dfe7e7',
        ink: {
          DEFAULT: '#10201f',
          muted: '#546564',
          subtle: '#7d8c8b',
        },
        status: {
          taken: '#15803d',
          takenSoft: '#e8f6ec',
          snoozed: '#a15c07',
          snoozedSoft: '#fdf2e3',
          missed: '#b42318',
          missedSoft: '#fdecea',
          upcoming: '#1d4ed8',
          upcomingSoft: '#eaf0fe',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 32, 31, 0.04), 0 8px 24px -12px rgba(16, 32, 31, 0.12)',
        lift: '0 2px 4px rgba(16, 32, 31, 0.06), 0 18px 40px -16px rgba(16, 32, 31, 0.22)',
      },
      borderRadius: {
        '2.5xl': '1.375rem',
      },
    },
  },
}
