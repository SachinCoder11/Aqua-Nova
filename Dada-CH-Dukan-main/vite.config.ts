import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Hostinger-friendly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
