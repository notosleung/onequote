import { resolve } from 'node:path'
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import anchor from 'markdown-it-anchor'
import GitHubAlerts from 'markdown-it-github-alerts'
// @ts-expect-error 无类型定义
import LinkAttributes from 'markdown-it-link-attributes'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({

  base: './',
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      routesFolder: 'pages',
      dts: 'src/typed-router.d.ts',
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      wrapperComponent: id => id.endsWith('index.md') ? 'IndexWrapper' : 'MdWrapper',
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        // typographer: true,
      },
      markdownItSetup(md) {
        md.use(anchor, {
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            // placement: 'after',
          }),
          slugify: s => s.trim().toLowerCase().replace(/\s+/g, '-'),
        })

        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(GitHubAlerts)
      },
      // _id参数暂未使用；待需要使用时，用id替换_id
      frontmatterPreprocess(frontmatter, options, _id, defaults) {
        const head = defaults(frontmatter, options) // 自动处理 frontmatter → head
        return { head, frontmatter }
      },
    }),
    AutoImport({
      imports: [
        'vue',
        unheadVueComposablesImports,
        VueRouterAutoImports,
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      dts: 'src/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        // 可添加 UI 库解析器，如 ElementPlus、Naive UI 等
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // SSG 配置
  // @ts-expect-error ssgOptions is for vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
})
