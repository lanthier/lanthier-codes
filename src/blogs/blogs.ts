/* eslint-disable dot-notation */
import { Blog } from '@/models/blog'
import { BlogCategory } from '@/models/blog-category'
import { blogTags } from '@/blogs/blog-tags'

export const blogs: Array<Blog> = [
  {
    title: 'Test',
    description: 'Mas test',
    date: new Date(),
    category: BlogCategory.Python,
    component: () => import('@/blogs/content/test.vue'),
    tags: [blogTags['Python'], blogTags['Gotcha']]
  }
]
