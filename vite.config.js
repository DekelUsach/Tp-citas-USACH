// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Tp-citas-USACH/',    // <— aquí el mismo nombre de tu repo
  plugins: [react()]
})
