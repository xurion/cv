//https://coolors.co/eae1df-3d405b-d52941-fcd581-e09f3e

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3d405b',
          dark: '#34364d',
        },
        secondary: '#d52941',
      },
      content: {
        empty: "' '",
      },
    },
  },
  plugins: [],
};
