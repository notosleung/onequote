<template>
  <div class="footer">
    <Back v-if="route.path !== '/'" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Back from './Back.vue'

const route = useRoute()
</script>

<style scoped>

</style>
