const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
      screens: {
        'xs': '425px',
        'sm': '640px',  
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
          mono: ['Roboto Mono', 'monospace']
      },
      extend: {
        // screens: {
        //   'xs': '425px',
        //   'sm': '640px',  
        //   'md': '768px',
        //   'lg': '1024px',
        //   'xl': '1280px',
        //   '2xl': '1536px',
        // },
        colors: {
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            trueGray: colors.trueGray,
            warmGray: colors.warmGray,
            orange: colors.orange,
            amber: colors.amber,
            lime: colors.lime,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            violet: colors.violet,
            fuchsia: colors.fuchsia,
            rose: colors.rose,
            portfolio: {
              white: '#FFFFFF',
              primary: '#E0E9F8',
              secondary: '#6B81A3',
              front: '#0F1215',
              border: '#23282E',
              back: '#0C0C0C',
              black: '#000000'
            }
        }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}