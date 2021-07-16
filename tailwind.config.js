module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'home-circle': "42rem"
      }
    },
    fontFamily: {
      sans: ["Montserrat"]
    },
    colors: {
      transparent: "transparent",
      yellow: {
        dark: "#F9EBCA",
        DEFAULT: "#FAB54D",
        light: "#FFF4E3"
      },
      blue: {
        DEFAULT: "#1FD2FF",
        light: "#D6F7FF"
      },
      green: {
        DEFAULT: "#53A28F",
        light: "#E4F1EE"
      },
      red: {
        DEFAULT: "#DC2E99",
        light: "#F9DCEE"
      },
      darkblue: {
        dark: "#13315C",
        DEFAULT: "#566F90",
        light: "#8597AF"
      },
      black: {
        DEFAULT: "#171933"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
