import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import './assets/styles/common.css'
import './assets/styles/theme-dark.css'
import './assets/styles/post.css'

import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-class.css'
import 'markdown-it-github-alerts/styles/github-base.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  ({ app, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)

    // 客户端激活时恢复状态
    if (!import.meta.env.SSR) {
      pinia.state.value = initialState.pinia || {}
    }
    else {
      initialState.pinia = pinia.state.value
    }
  },
)
