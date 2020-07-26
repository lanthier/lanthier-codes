/* eslint-disable dot-notation */
/* eslint-disable quotes */
import { Blog } from '@/models/blog'
import { BlogCategory } from '@/models/blog-category'
import { blogTags } from '@/blogs/blog-tags'

export const blogs: Array<Blog> = [
  {
    title: 'String Format with Multiple Values in Python',
    description: 'How to format multiple values on a string',
    date: new Date(),
    category: BlogCategory.Python,
    component: () => import('@/blogs/content/format-multiple-vals.vue'),
    tags: [blogTags['Python']]
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
    title: 'Useful CRUD Object Pattern in C#',
    description: `Your objects might be messier than you think`,
    date: new Date(2020, 2, 21),
    category: BlogCategory.CSharp,
    component: () => import('@/blogs/content/csharp-obj-pattern.vue'),
    tags: [blogTags['C#']]
  },
  {
    title: 'Make HTML Image Clickable',
    description: `How to make your images behave like links`,
    date: new Date(2019, 12, 13),
    category: BlogCategory.HtmlCss,
    component: () => import('@/blogs/content/html-img-clickable.vue'),
    tags: [blogTags['HTML'], blogTags['CSS']]
  },
  {
    title: 'Gridsome Flexsearch and Buefy Autocomplete',
    description: `Hooking up the gridsome flexsearch pluginto a b-autocomplete in Buefy`,
    date: new Date(2020, 6, 27),
    category: BlogCategory.JavaScript,
    component: () => import('@/blogs/content/gridsome-search-buefy.vue'),
    tags: [blogTags['JavaScript'], blogTags['Gridsome']]
  },
  {
    title: 'CSS Specificity',
    description: `The order of importance of CSS styles`,
    date: new Date(2020, 7, 13),
    category: BlogCategory.HtmlCss,
    component: () => import('@/blogs/content/css-specificity.vue'),
    tags: [blogTags['HTML'], blogTags['CSS'], blogTags["Gotcha"]]
  },
  {
    title: 'How to Count Cells in a Table',
    description: `JavaScript method of counting the amount of cells in an HTML table`,
    date: new Date(2020, 7, 17),
    category: BlogCategory.JavaScript,
    component: () => import('@/blogs/content/counting-table-cells.vue'),
    tags: [blogTags['HTML'], blogTags["JavaScript"]]
  },
  {
    title: 'Using the OpenWeatherAPI',
    description: `A guide at how to call the open weather api using fetch, ajax, and xhr requests.`,
    date: new Date(2020, 7, 20),
    category: BlogCategory.JavaScript,
    component: () => import('@/blogs/content/open-weather-api.vue'),
    tags: [blogTags['HTML'], blogTags["JavaScript"]]
  },
  {
    title: 'HTTP Hydration Parameters',
    description: `A pattern you can use to for your APIs.`,
    date: new Date(2020, 7, 26),
    category: BlogCategory.CSharp,
    component: () => import('@/blogs/content/hydrate-parameter.vue'),
    tags: [blogTags['C#']]
  }
]
