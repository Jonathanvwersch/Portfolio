module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        sans: ["Roboto"]
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        'max-xl': { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        'max-lg': { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        'max-md': { max: "767px" },
        // => @media (max-width: 767px) { ... }

        'max-sm': { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      lineHeight: {
         '12': '3rem',
      },
      padding: {
        'inherit':'inherit'
      }
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus", "responsive", "group-hover"],
    },
  },
  plugins: [],
}
