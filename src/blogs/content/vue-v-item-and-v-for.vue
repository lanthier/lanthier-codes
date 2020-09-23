<template>
  <article>
    <p>
      While iterating through lists in Vue.js, you may have come across a certain annoyance before:
      <b>
        The 'variableName' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead.
        You should not mix 'v-for' with 'v-if'.
      </b>
    </p>
    <br />
    <p>
      I have ran into this issue many times, whether it was attempting to render search results from an API or menu items. In fact this was common for me whenever I wanted to dynamically
      setup my routes in navigation and I needed to hide certain routes that existed on my vue router. The proper fix for this is to use the
      v-for on a <pre class="inline">&lt;template&gt;</pre> element.
    </p>
    <br />
    <p><b>Before:</b></p>
    <prism language="html" :code="codeSnippet1" />
    <br />
    <p><b>After:</b></p>
    <prism language="html" :code="codeSnippet2" />
    <br />
    <p>
      The reason why we are using vue templates are because they are not rendered in the DOM. For additional information on conditional rendering,
      see the <a href="https://vuejs.org/v2/guide/conditional.html">Conditional Rendering</a> docs on the Vue.js site.
    </p>
  </article>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class VueVItemAndVFor extends Vue {
  get codeSnippet1 () {
    return '<BlogCard v-for="blog in blogs" v-if="blog.isDeleted" :key="blog.name" />'
  }

  get codeSnippet2 () {
    return `<template v-for="blog in blogs">
  <BlogCard v-if="blog.isDeleted" :key="blog.name" />
</template>`
  }
}
</script>

<style scoped>
.inline {
  display: inline;
  padding: 4px;
}
</style>
