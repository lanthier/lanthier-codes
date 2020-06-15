/* eslint-disable dot-notation */
/* eslint-disable quotes */
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
  },
  {
    title: 'Dealing with v-for and v-if',
    description: 'A common issue I have ran into while using v-for and v-if',
    date: new Date(2020, 1, 13),
    category: BlogCategory.JavaScript,
    component: () => import('@/blogs/content/vue-v-item-and-v-for.vue'),
    tags: [blogTags['Vue'], blogTags['JavaScript'], blogTags['Gotcha']]
  },
  {
    title: 'Useful CRUD Object Pattern in C# ',
    description: `Your objects might be messier than you think`,
    date: new Date(2020, 2, 21),
    category: BlogCategory.CSharp,
    component: () => import('@/blogs/content/csharp-obj-pattern.vue'),
    tags: [blogTags['C#']]
  }
]
