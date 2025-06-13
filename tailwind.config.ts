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
    },
  },
  plugins: [require("daisyui")],
}

export default config
