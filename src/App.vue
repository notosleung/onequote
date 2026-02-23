<template>
  <Header />
  <RouterView />
  <Footer />
  <ToggleThemeFooterBtn />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import ToggleThemeFooterBtn from '@/components/ToggleThemeFooterBtn.vue'
</script>

<style scoped>

</style>
