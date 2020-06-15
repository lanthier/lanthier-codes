<template>
  <section>
    <h1 class="title">
      HTML/CSS
    </h1>
    <Category name="HtmlCss" />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Category from '@/views/Category.vue'

@Component({
  components: {
    Category
  }
})
export default class HtmlCss extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
