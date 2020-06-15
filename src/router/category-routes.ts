import { RouteConfig } from 'vue-router'

export const categoryRoutes: Array<RouteConfig> = [
  {
    path: '/htmlcss',
    name: 'htmlcss',
    meta: {
      displayName: 'HTML/CSS',
      nav: true
    }
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    meta: {
      displayName: 'JavaScript',
      nav: true
    }
  },
  {
    path: '/csharp',
    name: 'C#',
    meta: {
      displayName: 'C#',
      nav: true
    }
  },
  {
    path: '/category/python',
    name: 'Python',
    meta: {
      displayName: 'Python',
      nav: true
    }
  }
]