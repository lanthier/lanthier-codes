<template>
  <section>
    <h1 class="title">
      JavaScript
    </h1>
    <Category name="JavaScript" />
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
export default class JavaScript extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
