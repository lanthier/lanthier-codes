import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import { blogs } from '@/blogs/blogs'
import { Blog } from '@/models/blog'

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
    path: '/general',
    name: 'General',
    meta: {
      displayName: 'General',
      nav: true,
      title: 'Blogs - General'
    },
    component: () => import('@/views/General.vue')
  },
  {
    path: '/blog/:url',
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
      const matchingBlog = blogs.find((blog: Blog) => blog.url === to.params.url)
      document.title = matchingBlog ? matchingBlog.title : 'Lanthier Codes Blog'
    }
    else {
      document.title = to.meta.title || defaultTitle
    }
  })
})

export default router
