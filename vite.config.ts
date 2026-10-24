import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works at any URL:
  // username.github.io/repo-name/, a custom domain, or any static host.
  base: './',
});
