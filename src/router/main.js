import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/view/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/big-data',
    component: () => import('@/components/bigdata/BigData.vue'),
    children: [
      {
        path: '/big-data',
        redirect: '/big-data-index'
      },
      {
        path: '/big-data-index',
        component: () => import('@/components/bigdata/Index.vue')
      }, {
        path: '/big-data-smartstreet',
        component: () => import('@/components/bigdata/SmartStreet.vue')
      }

    ]
  }
]

export const router = new VueRouter({
  routes
})
