<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ blog.title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="blog-tags">
          <template v-for="tag in blog.tags">
            <BlogTagChip :key="tag.name" :blog-tag="tag" class="spaced" />
          </template>
        </div>
        {{ blog.description }}
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <a @click="share">
          Share
        </a>
      </div>
      <div class="card-footer-item">
        <a @click="navigateToBlog">
          View
        </a>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Blog } from '@/models/blog'
import BlogTagChip from '@/components/BlogTagChip.vue'

@Component({
  components: {
    BlogTagChip
  }
})
export default class BlogCard extends Vue {
  @Prop() blog!: Blog;

  public navigateToBlog () {
    this.$router.push({
      name: 'Blog',
      params: { title: this.blog.title }
    })
  }

  public share () {
    console.log('look I am sharing')
  }
}
</script>
<style lang="scss" scoped>
.spaced {
  margin-right: 4px;
}
</style>
