import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue({
    include: [/\.vue$/, /\.md$/],
  }), Markdown({
    markdownItOptions: {
      html: true,
      linkify: true,
      typographer: true,
    },
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
