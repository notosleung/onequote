<template>
  <ToggleTheme class="footer-btn theme-toggler">
    <i class="svg-icon" :class="themeClass" />
  </ToggleTheme>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { isDark } from '@/stores'
import ToggleTheme from './ToggleTheme.vue'

// const isDarkStore = useIsDarkStore()
const themeClass = computed(() => {
  return isDark.value ? 'icon-theme-dark' : 'icon-theme-light'
})
</script>
