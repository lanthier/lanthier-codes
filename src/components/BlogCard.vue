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
          <template>
            <BlogTagChip v-for="tag in blog.tags" :key="tag.name" :blog-tag="tag" class="spaced" />
          </template>
        </div>
        {{ blog.description }}
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="share">
        Share
      </a>
      <a class="card-footer-item" @click="navigateToBlog">
        View
      </a>
    </footer>
    <ShareDialog ref="shareDialog" :blog="blog" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Blog } from '@/models/blog'
import BlogTagChip from '@/components/BlogTagChip.vue'
import ShareDialog from '@/components/ShareDialog.vue'

@Component({
  components: {
    BlogTagChip,
    ShareDialog
  }
})
export default class BlogCard extends Vue {
  @Prop() blog!: Blog
  private dialogOpen = false

  public navigateToBlog () {
    this.$router.push({
      name: 'Blog',
      params: { title: this.blog.title }
    })
  }

  public share () {
    const dialog = this.$refs.shareDialog as ShareDialog
    dialog.toggle(true)
  }
}

</script>
<style lang="scss" scoped>
.spaced {
  margin-right: 4px;
}

.blog-card {
  width: 300px;
  margin: 32px;
  display: flex;
  flex-direction: column;
}

.card-content {
  height: 135px;
}

.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card-footer {
  height: 45px;
  margin-top: auto;
}

.blog-tags {
  margin-bottom: 12px;
}

</style>
