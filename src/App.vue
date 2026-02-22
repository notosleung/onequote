<template>
  <Header />
  <RouterView />
  <!-- <Footer /> -->
  <ToggleTheme />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
// import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
</script>

<style scoped>

</style>
