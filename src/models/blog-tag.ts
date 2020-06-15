export class BlogTag {
  name: string
  color: string

  public constructor(src?: IBlogTag) {
    if (src) {
      this.name = src.name
      this.color = src.color
    }
    else {
      this.name = ''
      this.color = '#FFFFFF'
    }
  }
}

export interface IBlogTag {
  name: string
  color: string
}