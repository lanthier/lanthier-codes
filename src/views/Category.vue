<template>
  <section>
    <h1 class="title">
      {{ title }}
    </h1>
    <hr />
    <div class="mobile-center">
      <template v-for="blog in blogs">
        <BlogCard :key="blog.title" :blog="blog" class="blog-card" />
      </template>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import BlogDisplay from '@/components/BlogDisplay.vue'
import BlogCard from '@/components/BlogCard.vue'
import { blogs } from '@/blogs/blogs'
import { Blog } from '../models/blog'
import { BlogCategory } from '../models/blog-category'

@Component({
  components: {
    BlogDisplay,
    BlogCard
  }
})
export default class Category extends Vue {
  blogCategory!: BlogCategory
  @Prop() name!: string
  @Prop() title!: string

  get blogs () {
    return blogs.filter((blog: Blog) => blog.category === this.blogCategory)
      .sort((a: Blog, b: Blog) => b.date.getTime() - a.date.getTime())
  }

  public created () {
    const name = this.name ? this.name : this.$route.params.name
    this.blogCategory = BlogCategory[name as keyof typeof BlogCategory]
  }

  data () {
    return {
      blogCategory: this.blogCategory
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
}

.mobile-center {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media only screen and (max-width: 1023px) {
  .mobile-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }
}
</style>
