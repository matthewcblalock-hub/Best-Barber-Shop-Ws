/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111715',
        forest: '#1B211D',
        brass: { DEFAULT: '#C9A66B', light: '#D9BD8C', dark: '#A8864E' },
        cream: '#F4EFE5',
        ivory: '#FAF9F6',
        walnut: '#594B3B',
        muted: '#8D928E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.28em',
      },
      maxWidth: {
        site: '82rem',
      },
    },
  },
  plugins: [],
};
