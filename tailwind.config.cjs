/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Averia Sans Libre', 'cursive', 'sans-serif'],
        secondary: ['Barlow', 'sans-serif'],
      },
      colors: {
        primary: 'rgb(56 189 248)', // bg-sky-400
        secondary: '#EE666F', // bg-rose-500
        'off-white': '#fafafa',
        'faded-black': 'rgba(12, 12, 13, 0.5)',
        'faded-orange': 'rgba(146, 64, 14,0.5)',
      },
      backgroundImage: {
        'hero-background':
          "url('src/assets/img/happy_children_cropped-min_01.jpeg')",
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
