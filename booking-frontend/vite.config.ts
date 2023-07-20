import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}/`,
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'composable': path.resolve(__dirname, 'src/composable'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  },
})
