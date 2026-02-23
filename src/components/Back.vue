<template>
  <RouterLink
    :to="route.path.split('/').slice(0, -1).join('/') || '/'"
    class="hover-underline"
    v-text="'cd ..'"
  />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
