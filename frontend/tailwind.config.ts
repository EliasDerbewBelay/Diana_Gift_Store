import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './store/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          50: '#f8f3ee',
          100: '#f2e4d7',
          200: '#e9c7b7',
          300: '#dca488',
          400: '#c67b51',
          500: '#a85c39',
          600: '#8b452d',
          700: '#6f3222',
          800: '#55271c',
          900: '#3e1c16',
        },
        surface: '#f8faf8',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
