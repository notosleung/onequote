<template>
  <div title="ToggleTheme" @click="toggleDark">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { toggleDark } from '@/stores'

// const isDarkStore = useIsDarkStore()
</script>
