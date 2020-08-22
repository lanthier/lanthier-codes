import { BlogCategory } from '@/models/blog-category'
import { BlogTag } from '@/models/blog-tag'

export class Blog implements IBlog {
  title: string;
  description: string;
  date: Date;
  category: BlogCategory;
  tags: Array<BlogTag>;

  component: () => any

  convertCategory (category: BlogCategory | string): BlogCategory {
    if (typeof (category) === 'string') {
      return BlogCategory[category as keyof typeof BlogCategory]
    }

    return category
  }

  convertComponent (component: (() => any) | string): () => any {
    if (typeof (component) === 'string') {
      return () => import(`@/blogs/content/${component}`)
    }

    return component
  }

  public constructor (src?: IBlog) {
    if (src) {
      this.title = src.title
      this.description = src.description
      this.category = this.convertCategory(src.category)
      this.tags = src.tags
      this.date = new Date(src.date)
      this.component = this.convertComponent(src.component)

      if (typeof (src.date) === 'string') {
        this.date = new Date(src.date)
      }
      else {
        this.date = src.date
      }
    }
    else {
      this.title = ''
      this.description = ''
      this.date = new Date()
      this.category = BlogCategory.General
      this.tags = new Array<BlogTag>()
      this.component = () => { /* Empty */ }
    }
  }
}

export interface IBlog {
  title: string;
  description: string;
  date: Date | string;
  category: BlogCategory | string;
  tags: Array<BlogTag>;
  component: (() => any) | string;
}
