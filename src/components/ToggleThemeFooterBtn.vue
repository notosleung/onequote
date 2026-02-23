<template>
  <ToggleTheme class="footer-btn theme-toggler">
    <i class="svg-icon" :class="themeClass" />
  </ToggleTheme>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useIsDarkStore } from '@/stores'
import ToggleTheme from './ToggleTheme.vue'

const isDarkStore = useIsDarkStore()
const themeClass = computed(() => {
  return isDarkStore.isDark ? 'icon-theme-dark' : 'icon-theme-light'
})
</script>
