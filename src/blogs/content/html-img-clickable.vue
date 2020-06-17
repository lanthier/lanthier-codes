<template>
  <section>
    <p>Hey all, quick one tonight. All that we need to do to make an image clickable is wrap in
      <pre class="inline">&lt;a&gt; tags.
    </p>
    <br />
    <prism language="html" :code="codeSnippet1" />
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HtmlImgClickable extends Vue{
  get codeSnippet1() {
    return `<a href="https://lanthiercodes.com">
  <img src="https://image.shutterstock.com/image-photo/shebear-bear-cubs-summer-forest-260nw-1217157787.jpg" />
</a>`
  }
}
</script>
<style scoped>
.inline {
  display: inline;
  padding: 4px;
}
</style>