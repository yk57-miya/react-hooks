/** @type {import('tailwindcss').Config} */
const COLOR = {
  BLACK: '#000',
  BLACK_LIGHTEN: '#707070',
  BLACK_GRAY: '#2F2F2F',
  WHITE: '#fff',
  GRAY_LIGHTEN: '#F4F4F4',
  GRAY: '#EAE8E8',
  GRAY_DARKEN: '#858585'
};

const colorClass = {
  white: COLOR.WHITE,
  black: COLOR.BLACK,
  'black-lighten': COLOR.BLACK_LIGHTEN,
  'black-gray': COLOR.BLACK_GRAY,
  'black-transparent': 'rgba(26,19,17,0.8)',
  gray: COLOR.GRAY,
  'gray-lighten': COLOR.GRAY_LIGHTEN,
  'gray-darken': COLOR.GRAY_DARKEN,
  transparent: 'transparent'
};
module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  corePlugins: {
    container: false
  },
  theme: {
    textColor: colorClass,
    backgroundColor: colorClass,
    borderColor: colorClass,
    fontSize: {
      xs: '1.0rem',
      sm: '1.2rem',
      base: '1.4rem',
      lg: '1.6rem',
      xl: '1.8rem',
      '2xl': '2rem',
      '3xl': '2.2rem',
      '4xl': '2.4rem',
      '5xl': '2.6rem',
      '6xl': '2.8rem',
      '7xl': '3.0rem',
      '8xl': '3.2rem',
      '9xl': '3.4rem',
      '10xl': '3.6rem',
      '11xl': '4.0rem',
      '12xl': '4.4rem',
      '13xl': '4.8rem',
      '14xl': '5.2rem',
      '15xl': '5.6rem',
      '16xl': '6.0rem'
    },
    extend: {
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      },
      spacing: {
        '1/3': '33.333333%'
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    }
  },
  variants: {
    padding: ['responsive', 'first', 'last', 'hover', 'focus'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    opacity: ['disabled']
  },
  plugins: []
};
