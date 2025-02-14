import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://75p42ht1-8000.usw3.devtunnels.ms',
        changeOrigin: true
      }
    }
  }
})
