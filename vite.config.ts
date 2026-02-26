import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line node/prefer-global/process
  base: process.env.GITHUB_ACTIONS ? '/onequote/' : './',
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // SSG 配置
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
