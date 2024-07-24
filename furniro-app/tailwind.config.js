/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'light-peach-100': '#FFF3E3',
        'light-peach-900': '#B88E2F',
        'dark-gray-300': '#9F9F9F',
        'dark-gray-400': '#D8D8D8',
        'dark-gray-500': '#616161',
        'dark-gray-600': '#666666',
        'dark-gray-700': '#898989',
        'dark-gray-800': '#3A3A3A',
        'dark-gray-900': '#333333',
        salmon: '#E97171',
        teal: '#2EC1AC',
      },

      fontFamily: {
        poppins: 'Poppins',
        montserrat: 'Montserrat',
      },

      screens: {
        tablet: '640px',

        'tablet-lg': '768px',

        laptop: '1024px',

        'laptop-lg': '1280px',

        desktop: '1440px',
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/banner.png')"
      }
    },
  },
  plugins: [],
};
