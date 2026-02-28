<template>
  <div class="footer">
    <Back v-if="route.path !== '/'" />
    <p class="footer-text">
      <span class="copyright-text">&copy; 2026 Notos Leung.</span>
      {{ '  ' }}
      <span v-if="route.path === '/'">Inspired by <a href="https://hitokoto.cn/" target="_blank" rel="noopener noreferrer">一言</a>.</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Back from './Back.vue'

const route = useRoute()
</script>

<style scoped>
.footer-text {
  text-align: end;
  padding: 10px 0;
  font-size: 0.9rem;
}
</style>
