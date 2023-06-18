/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#989898',
        bg__statistical: 'rgba(251, 146, 60, 0.3)',
      },
      boxShadow: {
        'border-full': '0 0 15px 0 rgba(0, 0, 0, 0.15)',
        'btn-slide': '0px 0px 6px 0px #00000040',
      },

      dropShadow: {
        'box-course': '0px 0px 4px rgba(0, 0, 0, 0.25)',
      },

      backgroundImage: {
        'box-course1':
          'linear-gradient(180deg, #FB923C 0%, #FB923C 51.04%, rgba(251, 146, 60, 0.7) 100%)',
        'box-course2':
          'linear-gradient(180deg, #3B82F6 0%, #3B82F6 51.04%, rgba(59, 130, 246, 0.7) 100%)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
