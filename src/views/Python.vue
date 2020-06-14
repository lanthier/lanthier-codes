<template>
  <section>
    Python
    <BlogView :blog="blog" />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BlogView from '@/components/BlogView.vue'
import { blogs } from '@/blogs/blogs'

@Component({
  components: {
    BlogView
  }
})
export default class Python extends Vue {
  get blog () {
    return blogs[0]
  }
}
</script>
<style lang="scss" scoped>
</style>
