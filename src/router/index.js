import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue'),
  },
]

const createRouter = () => new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
