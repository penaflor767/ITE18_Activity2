/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#f5f8fc',
        muted: '#8e9bad',
        brand: '#ff4d00',
        'brand-dark': '#e64500',
        'brand-foreground': '#050a14',
        canvas: '#050a14',
        surface: '#0b1120',
        'surface-muted': '#101827',
        border: '#1d2737',
        cyan: '#2ac5ee',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 48px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
}
