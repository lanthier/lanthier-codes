<template>
  <section>
    <BlogDisplay :blog="blog" />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BlogDisplay from '@/components/BlogDisplay.vue'
import { Blog } from '@/models/blog'
import { blogs } from '@/blogs/blogs'

@Component({
  components: {
    BlogDisplay
  }
})
export default class BlogView extends Vue {
  blogs = blogs
  get blog (): Blog | undefined {
    const url = this.$route.params.url
    return this.blogs.find((blog: Blog) => blog.url.includes(url))
  }
}
</script>
