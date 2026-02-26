<template>
  <div class="app-container">
    <Header />
    <main class="body-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.body-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.body-content > :deep(*) {
  flex: 1;
}
</style>
