import type { RouteRecordRaw } from 'vue-router'
import { about } from './about'
import { onequote } from './onequote'

const routes: RouteRecordRaw[] = [
  onequote,
  about,
]

export default routes
