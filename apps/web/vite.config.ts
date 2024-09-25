import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'node:path'
import EnvironmentPlugin from 'vite-plugin-environment'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@components': path.resolve(__dirname, './src/library/components'),
      '@drivers': path.resolve(__dirname, './src/library/drivers'),
      '@utils': path.resolve(__dirname, './src/library/utils'),
      '@slices': path.resolve(__dirname, './src/slices'),
      '@library': path.resolve(__dirname, './src/library'),
    },
  },
  plugins: [
    react(),
    EnvironmentPlugin('all', {
      prefix: 'VITE_',
    }),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
  ],
  base: './',
})
