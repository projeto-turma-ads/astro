import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '2xl': '1440px',
        '3xl': '2200px',
      },
      colors: {
        primary: '#6c5ce7',
        'primary-light': '#8E80FF',
        'primary-medium': '#4F43A8',
        'primary-dark': '#312A69',

        secondary: '#BD8D28',
        'secondary-light': '#EEDAAF',
        'secondary-medium': '#976220',
        'secondary-dark': '#6E4017',

        high: '#FFFFFF',
        'high-light': '#F5F5F4',
        'high-medium': '#E4E3E1',
        'high-dark': '#B7B2AE',

        low: '#131211',
        'low-light': '#958F88',
        'low-medium': '#645E59',
        'low-dark': '#000000',

        negative: '#C51B62',
        'negative-light': '#FAC7D2',
        'negative-medium': '#9D0261',
        'negative-dark': '#5A014A',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
