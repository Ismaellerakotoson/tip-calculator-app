const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./tip-calculator-app-main/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        green: { 900: "hsl(183, 100%, 15%)", 400: "hsl(172, 67%, 45%)" , 800: "hsl(183, 100%, 25%)" , 500: "hsl(183, 100%, 35%)"},
        grey: {
          500: "hsl(186, 14%, 43%)",
          400: "hsl(184, 14%, 56%)",
          200: "hsl(185, 41%, 84%)",
          50:  "hsl(189, 47%, 97%)",
        },
      },
    },
  },
  plugins: [],
}