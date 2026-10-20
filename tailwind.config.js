/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#001D39',
          950: '#001427',
          900: '#001D39',
          800: '#00284d',
        },
        sapphire: {
          DEFAULT: '#0A4174',
          light: '#0e5596',
          dark: '#072e52',
        },
        steel: {
          DEFAULT: '#49769F',
          light: '#5d8bb5',
          dark: '#385c7d',
        },
        cadet: {
          DEFAULT: '#4E8EA2',
          light: '#61a3b8',
          dark: '#3c7081',
        },
        airforce: {
          DEFAULT: '#6EA2B3',
          light: '#85b7c7',
          dark: '#588897',
        },
        sky: {
          brand: '#7BBDE8',
          DEFAULT: '#7BBDE8',
          light: '#9ad0f0',
          dark: '#5ba6d6',
        },
        powder: {
          DEFAULT: '#BDD8E9',
          light: '#d6e9f5',
          dark: '#9fc4db',
        },
        ice: {
          DEFAULT: '#F0F7FC',
          50: '#F8FAFC',
          100: '#F0F7FC',
          200: '#E1EFF8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-reverse': 'float-reverse 5.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
