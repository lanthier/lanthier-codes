<template>
  <section>
    <Category name="JavaScript" title="JavaScript" />
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
