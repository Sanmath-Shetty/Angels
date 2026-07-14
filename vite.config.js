import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        // Vendor code changes far less often than app code -- splitting it into
        // its own chunk means a future content/UI update only busts the small
        // app chunk's cache, not the large, rarely-changing vendor chunk.
        // (Function form -- this Vite/Rolldown version doesn't support the
        // object-map form of manualChunks.)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (/react-router-dom|react-dom|\/react\//.test(id)) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
          }
        },
      },
    },
  },
})
