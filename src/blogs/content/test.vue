<template>
  <section>
    <prism :code="code" language="csharp" line-numbers="true" />
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Test extends Vue {
  data () {
    return {
      code:
        `var x = test;
        while(x < 10) {
          x++;
        }
        `
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
