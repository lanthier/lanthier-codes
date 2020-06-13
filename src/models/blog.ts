export class Blog implements IBlog {
  title: String
  description: String
  content: String
  tags: Array<String>

  public constructor (src?: IBlog) {
    if (src) {
      this.title = src.title
      this.description = src.description;
      this.content = src.content
      this.tags = src.tags
    }
    else {
      this.title = ''
      this.description = ''
      this.content = ''
      this.tags = new Array<String>()
    }
  }
}

export interface IBlog {
  title: String
  description: String
  content: String
  tags: Array<String>
}