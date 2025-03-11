import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add any aliases if needed
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1600,
  },
  // Ensure compatibility with older browsers if needed
  esbuild: {
    target: 'es2015'
  }
})
