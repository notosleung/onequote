import { useDark, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useIsDarkStore = defineStore('isDark', {
  state: () => ({
    isDark: useStorage('onequote-is-dark', useDark()),
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      localStorage.setItem('onequote-is-dark', this.isDark.toString())
    },
  },
})
