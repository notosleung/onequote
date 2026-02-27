<template>
  <div class="header">
    <router-link to="/" class="logo" />
    <nav class="menu">
      <router-link to="/" class="hover-underline">
        首页
      </router-link>
      <router-link to="/about" class="hover-underline">
        关于
      </router-link>
      <a href="javascript:void(0)" class="hover-underline" @click="toggleDark">
        {{ isDark ? '开灯' : '熄灯' }}
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/logics'
</script>

<style scoped>

</style>
