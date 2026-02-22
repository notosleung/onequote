<template>
  <div class="onequote-fullpage">
    <div class="bracket left">
      『
    </div>
    <div class="word">
      {{ myQuote.content }}
    </div>
    <div class="bracket right">
      』
    </div>
    <div v-if="myQuote.comeFrom" class="author">
      —— {{ myQuote.comeFrom?.someone || '' }}{{ myQuote.comeFrom?.somewhere ? `「${myQuote.comeFrom.somewhere}」` : '' }}
    </div>
  </div>
  <div v-if="isActive" class="footer-btn play-pause-toggler" @click="pause">
    <i class="svg-icon icon-pause" />
  </div>
  <div v-if="!isActive" class="footer-btn play-pause-toggler" @click="resume">
    <i class="svg-icon icon-play" />
  </div>
</template>

<script setup lang="ts">
import type { Quote } from '@/types/Quote'
import { rand, useIntervalFn } from '@vueuse/core'
import { reactive, ref } from 'vue'
import { quotes } from '@/libs/quotes'

const quoteArr = reactive<Quote[]>(quotes)
const myQuote = ref<Quote>(quoteArr[0] as Quote)
const { pause, resume, isActive } = useIntervalFn(() => {
  myQuote.value = quoteArr[rand(1, quotes.length - 1)] as Quote
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
  font-size: 20px;
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
    line-height: 2.6rem !important;
  }
}
</style>
