import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const postcssPresetEnv = require("postcss-preset-env") 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
