<template>
  <section>
    <h1 class="title">
      Python
    </h1>
    <Category name="Python" />
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
export default class Python extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
