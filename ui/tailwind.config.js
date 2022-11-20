/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const createSafeList = () => {
  const values = [1, 2, 3, 4, 5, 6, 8, 9, 10];
  const classes = [
    "m-",
    "p-",
    "mx-",
    "my-",
    "px-",
    "py-",
    "mt-",
    "mr-",
    "mb-",
    "ml-",
    "pt-",
    "pr-",
    "pb-",
    "pl-",
  ];
  return values.reduce((acc, curr) => {
    return acc.concat(classes.map((c) => c + curr));
  }, []);
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    ...createSafeList(),
    "sm:col-span-3",
    "sm:col-span-4",
    "sm:col-span-6",
    "sm:col-span-12",
    "md:col-span-3",
    "md:col-span-4",
    "md:col-span-6",
    "md:col-span-12",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-6",
    "lg:col-span-12",
    "xl:col-span-3",
    "xl:col-span-4",
    "xl:col-span-6",
    "xl:col-span-12",
    "gap-0",
    "gap-1",
    "gap-2",
    "gap-3",
    "gap-4",
    "gap-5",
    "gap-6",
    "gap-7",
    "gap-8",
    "gap-9",
    "gap-10",
    // justifyContent
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
    // justifyItems
    "justify-items-start",
    "justify-items-end",
    "justify-items-center",
    "justify-items-stretch",
    // alignContent
    "content-start",
    "content-end",
    "content-center",
    "content-between",
    "content-around",
    "content-evenly",
    "content-baseline",
    // alignItems
    "items-start",
    "items-end",
    "items-center",
    "items-baseline",
    "items-stretch",
  ],

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
      spacing: {
        4: "1rem",
      },
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
