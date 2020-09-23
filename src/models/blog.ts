import { BlogCategory } from '@/models/blog-category'
import { BlogTag } from '@/models/blog-tag'
import { blogTags } from '@/blogs/blog-tags'

export class Blog implements IBlog {
  title: string;
  description: string;
  url: string;
  date: Date;
  category: BlogCategory;
  tags: Array<BlogTag>;

  component: () => any

  public constructor (src?: IBlog) {
    if (src) {
      this.title = src.title
      this.description = src.description
      this.url = src.url
      this.category = this.convertCategory(src.category)
      this.tags = this.convertTags(src.tags)
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
      this.url = ''
      this.date = new Date()
      this.category = BlogCategory.General
      this.tags = new Array<BlogTag>()
      this.component = () => { /* Empty */ }
    }
  }

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

  convertTags (tags: Array<BlogTag> | Array<string>): Array<BlogTag> {
    const blogTagz: Array<BlogTag> = []
    for (const tag of tags) {
      if (typeof (tag) === 'string') {
        blogTagz.push(blogTags[tag])
      }
      else {
        blogTagz.push(tag as BlogTag)
      }
    }
    return blogTagz
  }
}

export interface IBlog {
  title: string;
  description: string;
  url: string;
  date: Date | string;
  category: BlogCategory | string;
  tags: Array<BlogTag> | Array<string>;
  component: (() => any) | string;
}
