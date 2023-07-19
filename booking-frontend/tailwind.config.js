/** @type {import('tailwindcss').Config} */

import postcssPresetEnv from "postcss-preset-env"
import cssnext from "postcss-cssnext"
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
