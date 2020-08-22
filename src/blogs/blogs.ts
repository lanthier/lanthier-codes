/* eslint-disable dot-notation */
/* eslint-disable quotes */
import { Blog } from '@/models/blog'
import { BlogCategory } from '@/models/blog-category'
import { blogTags } from '@/blogs/blog-tags'
import blogJson from '@/blogs/blogs.json'

const blogs: Array<Blog> = []

for (const blog of blogJson) {
  blogs.push(new Blog(blog))
}

export { blogs }
