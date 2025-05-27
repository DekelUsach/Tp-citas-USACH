import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TP4-Citas-partes-unidas/',
  plugins: [react()],
})
