import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { 
            top: 10, 
            opacity: 1
          },
          to: {
            top: 800,
            right: 900,
            opacity: 0.1
          },
        },
      },
      animation: {
        slide: 'slide 6800ms linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
