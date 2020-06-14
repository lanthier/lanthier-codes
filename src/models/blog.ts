export class Blog implements IBlog {
  title: string
  description: string
  component: () => any
  tags: Array<string>

  public constructor (src?: IBlog) {
    if (src) {
      this.title = src.title
      this.description = src.description;
      this.component = src.component
      this.tags = src.tags
    }
    else {
      this.title = ''
      this.description = ''
      this.component = () => { }
      this.tags = new Array<string>()
    }
  }
}

export interface IBlog {
  title: string
  description: string
  component: () => any
  tags: Array<string>
}