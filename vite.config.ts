import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    _global: ({}),
  },
  optimizeDeps: {
    include: [
      '@mui/icons-material',
      '@mui/material',
      '@emotion/react',
      '@emotion/styled',
    ],
  },
})
