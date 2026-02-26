import { useDark } from '@vueuse/core'
// import { defineStore } from 'pinia'
import { nextTick } from 'vue'

export const isDark = useDark()

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleDark(event: MouseEvent) {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
}

// export const useIsDarkStore = defineStore('isDark', () => {
//   const isDark = ref(false)

//   // 仅在客户端执行，避免 SSR 问题
//   if (typeof window !== 'undefined') {
//     const stored = localStorage.getItem('onequote-is-dark')
//     isDark.value = stored ? stored === 'true' : useDark().value
//   }

//   /**
//    * Credit to [@hooray](https://github.com/hooray)
//    * @see https://github.com/vuejs/vitepress/pull/2347
//    */
//   function toggleDark(event: MouseEvent) {
//   // @ts-expect-error experimental API
//     const isAppearanceTransition = document.startViewTransition
//       && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

//     if (!isAppearanceTransition) {
//       isDark.value = !isDark.value
//       return
//     }

//     const x = event.clientX
//     const y = event.clientY
//     const endRadius = Math.hypot(
//       Math.max(x, innerWidth - x),
//       Math.max(y, innerHeight - y),
//     )
//     const transition = document.startViewTransition(async () => {
//       isDark.value = !isDark.value
//       await nextTick()
//     })
//     transition.ready
//       .then(() => {
//         const clipPath = [
//           `circle(0px at ${x}px ${y}px)`,
//           `circle(${endRadius}px at ${x}px ${y}px)`,
//         ]
//         document.documentElement.animate(
//           {
//             clipPath: isDark.value
//               ? [...clipPath].reverse()
//               : clipPath,
//           },
//           {
//             duration: 400,
//             easing: 'ease-out',
//             fill: 'forwards',
//             pseudoElement: isDark.value
//               ? '::view-transition-old(root)'
//               : '::view-transition-new(root)',
//           },
//         )
//       })
//   }

//   return { isDark, toggleDark }
//   // state: () => ({
//   //   isDark: useStorage('onequote-is-dark', useDark()),
//   // }),
//   // actions: {
//   //   toggleDark() {
//   //     this.isDark = !this.isDark
//   //     localStorage.setItem('onequote-is-dark', this.isDark.toString())
//   //   },
//   // },
// })
