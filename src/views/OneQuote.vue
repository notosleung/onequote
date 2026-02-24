<template>
  <div class="onequote-fullpage">
    <div class="bracket left">
      『
    </div>
    <div class="word" v-html="quoteArr[num]?.content.replace(/\n/g, '<br>')" />
    <div class="bracket right">
      』
    </div>
    <div v-if="quoteArr[num]?.comeFrom" class="author">
      —— {{ quoteArr[num]?.comeFrom?.someone || '' }}{{ quoteArr[num]?.comeFrom?.somewhere ? `「${quoteArr[num]?.comeFrom?.somewhere}」` : '' }}
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
import type { Quote } from '@/types/Quote'
import { useIntervalFn } from '@vueuse/core'
import { ref, shallowRef } from 'vue'
import { quotes } from '@/libs/quotes'

const quoteArr = shallowRef<Quote[]>(quotes)
const num = ref(0)
const { pause, resume, isActive } = useIntervalFn(() => {
  num.value = Math.round(Math.random() * (quotes.length - 1))
}, 5000)
</script>

<style scoped>
.onequote-fullpage {
  position: relative;
  color: black;
  z-index: 1;
  margin-top: 25vh;
  margin-bottom: 25vh;
  margin-left: auto;
  margin-right: auto;
}
.onequote-fullpage .bracket {
  font-size: 30px;
}
.onequote-fullpage .bracket.left {
  position: absolute;
  left: 0;
  top: 0;
}
.onequote-fullpage .bracket.right {
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

.dark .onequote-fullpage {
  color: white;
}
.dark .onequote-fullpage .author {
  color: rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 560px) {
  .onequote-fullpage {
    margin-top: 15vh !important;
    margin-bottom: 10vh !important;
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
