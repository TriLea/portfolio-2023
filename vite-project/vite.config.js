import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tlea.dev/',
  // base: '/tlea.dev/vite-project/',
  plugins: [react()]
})
