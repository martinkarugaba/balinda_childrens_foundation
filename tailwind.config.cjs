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
        secondary1: '#EB5426',
        secondary: '#EE666F', // bg-rose-500
        'off-white': '#fafafa',
        'light-grey': '#EFF3F2', // #EFF3F2
        'faded-black': 'rgba(12, 12, 13, 0.6)',
        'text-black': 'rgb(43, 47, 47)',
        'text-grey': '#7b8282',

        //...
        'faded-violet': 'rgba(34, 26, 30,0.7)',
        'faded-orange': 'rgba(146, 64, 14,0.5)',
        'faded-grey': 'rgba(43, 47, 47,0.7)',
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
