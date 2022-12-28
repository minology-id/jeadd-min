import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@minology',
        replacement: path.resolve(__dirname, '/minology'),
      },
      {
        find: '@app',
        replacement: path.resolve(__dirname, '/src/app'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, '/src/pages'),
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, '/src/config'),
      },
      {
        find: '@provider',
        replacement: path.resolve(__dirname, '/src/providers'),
      },
      {
        find: '@route',
        replacement: path.resolve(__dirname, '/src/routes'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, '/src/assets'),
      },
    ],
  },
});
