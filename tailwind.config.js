const path = require("path");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html", path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    colors: {
      primary: "#c52d3b",
      secondary: "#02b3b3",
      light: "#ededed",
      dark: "#5e5e60",
      black: colors.black,
      white: colors.white,
      success: colors.green[500],
      danger: colors.red[500],
      warning: colors.yellow[500],
      info: colors.blue[400],
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [],
};
