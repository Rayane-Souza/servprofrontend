import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './servpro',  // Garante que a raiz do Vite seja a pasta "servpro"
  build: {
    outDir: './dist',  // Define a pasta de saída para os arquivos de build
  },
})