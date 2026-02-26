<template>
  <div title="ToggleTheme" @click="toggleDark">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { toggleDark } from '@/stores'

// const isDarkStore = useIsDarkStore()
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 9999;
}
.dark::view-transition-old(root) {
  z-index: 9999;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
