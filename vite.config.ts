import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    react(),
    tailwindcss(), // No options needed for Tailwind v4
    mkcert()
  ],
  css: {
    // Enable CSS modules for better isolation
    modules: {
      localsConvention: 'camelCase',
    },
  }
})
