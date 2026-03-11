import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        surface: '#F8FAFF',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        'gradient-soft':  'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
        'gradient-hero':  'linear-gradient(135deg, #f8faff 0%, #eff6ff 30%, #f5f3ff 70%, #f8faff 100%)',
      },
      boxShadow: {
        card:  '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(37,99,235,0.07)',
        'card-hover': '0 8px 40px rgba(37,99,235,0.14)',
        glow:  '0 0 40px rgba(37,99,235,0.18)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        marquee:      'marquee 28s linear infinite',
        float:        'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
