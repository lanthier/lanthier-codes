<template>
  <section>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Blog } from "@/models/blog"

@Component
export default class BlogCard extends Vue {
  @Prop() blog!: Blog;
  
}
</script>
<style lang="scss" scoped>
</style>
