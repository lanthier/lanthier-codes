import { BlogCategory } from '@/models/blog-category'
import { BlogTag } from '@/models/blog-tag'

export class Blog implements IBlog {
  title: string
  description: string
  date: Date
  category: BlogCategory
  tags: Array<BlogTag>

  component: () => any

  public constructor (src?: IBlog) {
    if (src) {
      this.title = src.title
      this.description = src.description;
      this.date = src.date
      this.category = src.category
      this.tags = src.tags
      this.component = src.component
    }
    else {
      this.title = ''
      this.description = ''
      this.date = new Date()
      this.category = BlogCategory.General
      this.tags = new Array<BlogTag>()
      this.component = () => { }
    }
  }
}

export interface IBlog {
  title: string
  description: string
  date: Date
  category: BlogCategory
  tags: Array<BlogTag>
  component: () => any
}
