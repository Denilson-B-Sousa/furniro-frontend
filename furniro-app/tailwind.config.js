/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'light-peach-50': '#FCF8F3',
        'light-peach-100': '#FFF3E3',
        'light-peach-200': '#F4F5F7',
        'light-peach-900': '#B88E2F',
        'dark-gray-300': '#9F9F9F',
        'dark-gray-350': '#D9D9D9',
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
        mobile: '430px',

        tablet: '640px',

        'tablet-lg': '768px',

        laptop: '1024px',

        'laptop-lg': '1280px',

        desktop: '1440px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/banner.png')",
        'gallery-pattern':
          "url('https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/banner-furniture.png')",
        'shop-pattern':
          "url('https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/shop-banner.jpg')",
      },

      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
