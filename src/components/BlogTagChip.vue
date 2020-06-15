<template>
  <div class="tag" :style="style">
    {{ blogTag.name }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BlogTag } from '../models/blog-tag'

@Component
export default class BlogTagChip extends Vue {
  @Prop() isLight!: boolean
  @Prop() blogTag!: BlogTag

  get style () {
    return {
      'background-color': this.blogTag.color
    }
  }
}
</script>
