import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ important for static hosting like Vercel
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
