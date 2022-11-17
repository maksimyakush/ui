/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme("colors.common.white"),
            },
          },
        },
      }),
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
    },
    colors: {
      common: {
        black: "hsl(0deg 0% 0%)",
        white: "hsl(0deg 0% 100% / 100%)",
      },
      primary: {
        main: "hsl(254deg 11% 32% / 100%)",
        light: "hsl(254deg 11% 42% / 100%)",
        dark: "hsl(254deg 11% 22% / 100%)",
      },
      secondary: {
        main: "hsl(164deg 95% 43% / 100%)",
        light: "hsl(164deg 95% 53% / 100%)",
        dark: "hsl(164deg 95% 33% / 100%)",
      },
      error: {
        main: "hsl(0deg 65% 51% / 100%)",
        light: "hsl(0deg 83% 63% / 100%)",
        dark: "hsl(0deg 66% 47% / 100%)",
      },
      warning: {
        main: "hsl(27deg 98% 47% / 100%)",
        light: "hsl(36deg 100% 50% / 100%)",
        dark: "hsl(21deg 100% 45% / 100%)",
      },
      info: {
        main: "hsl(201deg 98% 41% / 100%)",
        light: "hsl(199deg 98% 48% / 100%)",
        dark: "hsl(206deg 100% 31% / 100%)",
      },
      success: {
        main: "hsl(123deg 46% 34% / 100%)",
        light: "hsl(122deg 39% 49% / 100%)",
        dark: "hsl(124deg 55% 24% / 100%)",
      },
      grey: {
        100: "hsl(0deg 0% 96% / 100%)",
        200: "hsl(0deg 0% 93% / 100%)",
        300: "hsl(0deg 0% 88% / 100%)",
        400: "hsl(0deg 0% 74% / 100%)",
        500: "hsl(0deg 0% 62% / 100%)",
        600: "hsl(0deg 0% 46% / 100%)",
        700: "hsl(0deg 0% 38% / 100%)",
        800: "hsl(0deg 0% 26% / 100%)",
        900: "hsl(0deg 0% 13% / 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addUtilities }) {
      const newUtilities = {
        ".t-h1": {
          fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
          fontWeight: theme("fontWeight.black"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.tight"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-h2": {
          fontSize: "clamp(1.5rem, 1.2rem + 1.4286vw, 3rem)",
          fontWeight: theme("fontWeight.black"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.tight"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-h3": {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.bold"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.tight"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-h4": {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.normal"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.normal"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-h5": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.normal"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.normal"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-h6": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.medium"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.normal"),
          letterSpacing: theme("letterSpacing.wide"),
          color: "hsl(0deg 0% 26% / 100%)",
        },
        ".t-body1": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.medium"),
          fontFamily: theme("fontFamily.nunito"),
          lineHeight: theme("lineHeight.normal"),
          letterSpacing: theme("letterSpacing.normal"),
          color: "hsl(0deg 0% 26% / 100%)", //grey.800
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
