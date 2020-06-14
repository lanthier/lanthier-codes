import { Blog } from '@/models/blog'

export const blogs: Array<Blog> = [
  {
    title: 'Test',
    description: 'Mas test',
    component: () => import('@/blogs/content/test.vue'),
    tags: ['Python']
  }
]
