<template>
  <section class="container">
    <div class="heading">
      <h1 class="title">{{ blog.title }}</h1>
      <h2 class="subtitle">{{ blog.description }}</h2>
    </div>
    <hr />
    <component :is="blog.component" class="container" />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Blog } from '@/models/blog'

@Component
export default class BlogDisplay extends Vue {
  @Prop() blog!: Blog
}
</script>
<style lang="scss" scoped>
.container {
  margin: 64px;
}

@media only screen and (max-width: 1023px) {
  .container {
    margin: 6px;
  }
}

.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
