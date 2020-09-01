import { Blog } from '@/models/blog'
import blogJson from '@/blogs/blogs.json'

const blogs: Array<Blog> = []

for (const blog of blogJson) {
  blogs.push(new Blog(blog))
}

export { blogs }
