const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'smLarge': '1180px',
      'mdLarge': '1248px',

      'smMd': { 'min': '800px', 'max': '1180px' },
      'mdMd': { 'min': '1024px', 'max': '1248px' },
      'smSm': { 'min': '800px', 'max': '1024px' },
      'xsXs': { 'min': '540px', 'max': '800px' },
      'smXs': { 'max': '580px' },

    },
    extend: {
      width: {
        '104': '27rem',
      },
      height: {
        '104': '40rem',
      },
      colors: {
        'regal-blue': '#2D3748',
        'cus-blue': '#49454F'
      },
      backgroundImage: {
        "white-fill": "url('/src/assets/white-fill.png')",
        "homepage-fill": "url('/src/assets/homepage.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],

  variants: {
    scrollbar: ['rounded']
  }
});
