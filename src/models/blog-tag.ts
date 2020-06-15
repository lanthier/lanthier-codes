export class BlogTag {
  name: string
  background: string
  textColor?: string

  public constructor(src?: IBlogTag) {
    if (src) {
      this.name = src.name
      this.background = src.background
      this.textColor = src.textColor
    }
    else {
      this.name = ''
      this.background = '#FFFFFF'
      this.textColor = '#4a4a4a'
    }
  }
}

export interface IBlogTag {
  name: string
  background: string
  textColor: string
}