import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Use the GitHub Pages repo path for production builds and preview.
// Local dev keeps '/' so HMR and dev-server paths work normally.
const base = process.argv.includes('build') || process.argv.includes('preview')
  ? '/matstudio-site/'
  : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
  preview: {
    allowedHosts: true,
  },
})
