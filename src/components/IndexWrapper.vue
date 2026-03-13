<template>
  <div class="onequote-wrapper">
    <div class="onequote-fullpage">
      <div class="quote-area">
        <div class="bracket left">
          『
        </div>
        <div class="word" v-html="quotes[num]?.content.replace(/\n/g, '<br>')" />
        <div class="bracket right">
          』
        </div>
      </div>
      <div v-if="quotes[num]?.comeFrom" class="author">
        —— {{ quotes[num]?.comeFrom?.someone || '' }}{{ quotes[num]?.comeFrom?.somewhere ? `「${quotes[num]?.comeFrom?.somewhere}」` : '' }}
      </div>
    </div>
  </div>
  <div v-if="isActive" class="footer-btn play-pause-toggler" title="pause" @click="pause">
    <i class="svg-icon icon-pause" />
  </div>
  <div v-if="!isActive" class="footer-btn play-pause-toggler" title="play" @click="resume">
    <i class="svg-icon icon-play" />
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { quotes } from '../../data/quotes'

// 接收来自index.md的frontmatter，但页面中不需要使用它
defineProps<{
  frontmatter?: Record<string, unknown>
}>()

const num = ref(0)

// 在服务端不会执行，因此要设置不立即执行
const { pause, resume, isActive } = useIntervalFn(() => {
  num.value = Math.round(Math.random() * (quotes.length - 1))
}, 5000, { immediate: false })

onMounted(() => {
  resume() // 在客户端激活时启动
})
</script>

<style scoped>
.onequote-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
}

.onequote-fullpage {
  width: 100%;
  padding: 0 1rem;
  user-select: none;
}

.quote-area {
  position: relative;
  color: black;
  z-index: 1;
  width: 100%;
}
.quote-area .bracket {
  font-size: 30px;
}
.quote-area .bracket.left {
  position: absolute;
  left: 0;
  top: 0;
}
.quote-area .bracket.right {
  position: absolute;
  right: 0;
  bottom: 0;
}
.onequote-fullpage .word {
  font-size: 1.5rem;
  text-align: center;
  line-height: 50px;
  word-break: normal;
  margin: 0;
  padding: 15px 50px;
}
.onequote-fullpage .author {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.8);
  float: right;
  margin-top: 40px;
}

.dark .quote-area {
  color: white;
}
.dark .onequote-fullpage .author {
  color: rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 560px) {
  .onequote-wrapper {
    padding: 1rem 0;
  }

  .onequote-fullpage .word {
    font-size: 1rem;
    line-height: 2.6rem !important;
  }
  .onequote-fullpage .author {
    font-size: 1rem;
  }
}
</style>
