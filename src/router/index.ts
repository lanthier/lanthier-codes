import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      nav: false
    },
    component: Home
  },
  {
    path: '/htmlcss',
    name: 'htmlcss',
    meta: {
      displayName: 'HTML/CSS',
      nav: true
    },
    component: () => import('@/views/HtmlCss.vue')
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    meta: {
      displayName: 'JavaScript',
      nav: true
    },
    component: () => import('@/views/Javascript.vue')
  },
  {
    path: '/csharp',
    name: 'C#',
    meta: {
      displayName: 'C#',
      nav: true
    },
    component: () => import('@/views/Csharp.vue')
  },
  {
    path: '/python',
    name: 'Python',
    meta: {
      displayName: 'Python',
      nav: true
    },
    component: () => import('@/views/Python.vue')
  },
  {
    path: '/blog/:title',
    name: 'Blog',
    meta: {
      displayName: 'Blog',
      nav: false
    },
    component: () => import('@/views/BlogView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
