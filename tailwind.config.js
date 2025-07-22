/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B', // Amarillo principal
          dark: '#B45309'
        },
        secondary: {
          light: '#F3F4F6',
          DEFAULT: '#6B7280', // Gris
          dark: '#1F2937' // Negro/gris oscuro
        },
        accent: {
          light: '#FEE2E2',
          DEFAULT: '#EA580C', // Naranja
          dark: '#9A3412'
        },
        dark: '#111827' // Negro
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/assets/images/hero-bg.jpg')"
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}

