/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBackgroundColor: '#222629',
        customGrayLight: '#6B6E70',
        customGrayDark: '#474B4F',
        customOrange: '#FF7600',
      },
    },
  },
  plugins: [],
}