import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const defaultTitle = 'Lanthier Codes'

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
      nav: true,
      title: 'Blogs - HTML/CSS'
    },
    component: () => import('@/views/HtmlCss.vue')
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    meta: {
      displayName: 'JavaScript',
      nav: true,
      title: 'Blogs - JavaScript'
    },
    component: () => import('@/views/Javascript.vue')
  },
  {
    path: '/csharp',
    name: 'C#',
    meta: {
      displayName: 'C#',
      nav: true,
      title: 'Blogs - C#'
    },
    component: () => import('@/views/Csharp.vue')
  },
  {
    path: '/python',
    name: 'Python',
    meta: {
      displayName: 'Python',
      nav: true,
      title: 'Blogs - Python'
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

router.afterEach((to) => {
  Vue.nextTick(() => {
    if (to.name === 'Blog') {
      document.title = to.params.title
    }
    else {
      document.title = to.meta.title || defaultTitle
    }
  })
})

export default router
