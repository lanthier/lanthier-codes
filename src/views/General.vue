<template>
  <section>
    <Category name="General" title="General" />
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
export default class General extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
