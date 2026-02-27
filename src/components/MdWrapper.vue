<template>
  <div class="page page-post">
    <h1 v-if="frontmatter.title" :id="frontmatter.title" class="title">
      {{ frontmatter.title }}
    </h1>
    <div v-if="frontmatter.date || frontmatter.description" class="subtitle">
      <span v-if="frontmatter.description">{{ frontmatter.description }}</span>
      <span v-if="frontmatter.date">{{ `-${formatDate(frontmatter.date, false)}` }}</span>
    </div>
    <div class="post">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/logics'

interface Frontmatter {
  title?: string
  description?: string
  date?: string
  [key: string]: unknown
}

const { frontmatter } = defineProps<{
  frontmatter: Frontmatter
}>()
</script>

<style scoped>

</style>
