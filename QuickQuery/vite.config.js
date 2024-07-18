
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',  // assuming your backend is on port 5000
    },
  },
});