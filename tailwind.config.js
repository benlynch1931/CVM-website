module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          'DEFAULT': 'rgb(204, 203, 202)'
        },
        green: {
          'DEFAULT': 'rgb(45, 107, 47)'
        }
      },
      spacing: {
        navbar: 'calc(100% - 9rem)',
        sidebar: 'calc(100% - 5rem)',
        slideshow: '30vh'
      },
      margin: {
        slideshow: '5vh'
      },
      inset: {
        navbar: '10vh',
        main: '23vh'
      },
      boxShadow: {
        sidebar: '10px 0 5px -2px rgba(171, 171, 171, 1)',
        main: '0 0 9px 6px rgba(171, 171, 171, 1)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
