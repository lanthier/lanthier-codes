<template>
  <section class="container">
    <h1>{{ blog.title }}</h1>
    <component :is="blog.component" />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Blog } from '@/models/blog'

@Component
export default class BlogView extends Vue {
  @Prop() blog!: Blog
}
</script>
<style lang="scss" scoped>
.container {
  margin: 64px;
}
</style>
