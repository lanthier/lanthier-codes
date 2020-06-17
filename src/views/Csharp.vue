<template>
  <section>
    <Category name="CSharp" title="C#"/>
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
export default class CSharp extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
