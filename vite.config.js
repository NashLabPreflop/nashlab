// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: "/nashlab/",
  "deploy": "gh-pages -d dist --dotfiles",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})