/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
          "text-main": "#f3f3f3",
          "text-dim": "#76808c",
          "background-main": "#0e141b",
          "background-highlight": "#1e2329",
          "background-hover": "#313843",
          "background-secondary": "#14344b",
          "background-tertiary": "#212b45",
          "background-main-50": "#0e141b50",
          "background-main-20": "#0e141b33",
          "color-primary": "#66c0f4",
          "color-secondary": "#4b619b",
          "accent-green": "#a1cd44",
          "accent-yellow": "#c1b15f",
          "accent-red": "#cd5444"
        
      }
    },
  },
  plugins: [],
}

