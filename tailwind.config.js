/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        org: '#FF6600',
        darkLight: '#44425A',
      },
      boxShadow: {
        'border-full': '0 0 15px 0 rgba(0, 0, 0, 0.15)',
      },
      dropShadow: {
        'box-course': '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
