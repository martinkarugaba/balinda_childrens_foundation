/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#55C1BC',
        secondary: '#EE666F',
        'off-white':'#fafafa'
      },
    },
  },
  plugins: [],
};
