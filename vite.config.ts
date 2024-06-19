/* eslint-disable import/no-default-export */
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      lib: path.resolve(__dirname, 'lib'),
    },
  },
});
