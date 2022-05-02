export default {
  '/sys/menu': () => import('@/views/sys/Menu.vue'),
  '/sys/user': () => import('@/views/sys/User.vue'),
  '/sys/role': () => import('@/views/sys/Role.vue'),
  '/sys/user-role': () => import('@/views/sys/UserRole.vue'),
}