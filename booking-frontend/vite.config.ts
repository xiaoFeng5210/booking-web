import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from "postcss-preset-env"
import cssnext from "postcss-cssnext"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssPresetEnv(), cssnext()]
    }
  }
})
