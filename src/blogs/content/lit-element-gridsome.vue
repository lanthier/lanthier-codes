<template>
  <article>
    <p>
      <a href="https://lit-element.polymer-project.org/">Lit element</a> is a useful library for creating web components. <a href="https://gridsome.org/">Gridsome</a>
      is a <a href="https://jamstack.org/">jamstack framework</a>, a static site generator, for Vue.js.
    </p>
    <p>
      Incorporating the two of these shouldn't be troublesome, though I found some issues with one of my sites when I tried this. So let us begin.
    </p>
    <p>
      Install your web component.
    </p>
    <prism :code="snippet1" language="powershell" />
    <p>
      For yarn:
    </p>
    <prism :code="snippet2" language="powershell" />
    <p>
      Now use it somewhere. I put it in my markdown which I have configured with <pre class="inline">@gridsome/source-filesystem</pre>:
    </p>
    <prism :code="snippet3" language="html" />
    <p>
      After adding an import statement everything seemed to work fine until I tried to build for production. I hit the dreaded error: <b>window is not defined</b>. This was happening
      inside of the lit element code that my web component was referencing. Note I did not provide the import statement
      due to programmers who are just looking for the solutions to their problems via code snippets.
    </p>
    <p>
      Solution for <b>window is not defined</b> lit element with gridsome:
    </p>
    <prism :code="snippet4" language="javascript" />
    <strong>
      Why?
    </strong>
    <p>
      This error occurs when gridsome encounters the <pre class="inline">window</pre> variable in a node context while it is
      prerendering your code through a <pre class="inline">gridsome build</pre>. If we import the webcomponent inside of the
      <pre class="inline">if (isClient)</pre> condition, gridsome build will not encounter the variable.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LitElementGridsome extends Vue {
  get snippet1 () {
    return 'npm i @lanthierlabs/nutrient-label'
  }

  get snippet2 () {
    return 'yarn add @lanthierlabs/nutrient-label'
  }

  get snippet3 () {
    return '<nutrient-label title="Ratio Keto Bar (both)" servingsize="1 bar" calories="220" fat="17" saturatedfat="5" carbohydrates="5" protein="12"></nutrient-label>'
  }

  get snippet4 () {
    return `
export default function(Vue, { router, head, isClient }) {
  if (isClient) {
    const NutrientLabel = require("@lanthierlabs/nutrient-label").default;
    Vue.component("nutrient-label", NutrientLabel);  
  }
  ...`
  }
}
</script>
<style lang="scss" scoped>
</style>
