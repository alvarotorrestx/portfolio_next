import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "cursive"],
        syne: ['"Syne"', "sans-serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      transitionProperty: {
        DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      },
    },
  },
  plugins: [require("daisyui")],
}

export default config
