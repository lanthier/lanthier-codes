<template>
  <article>
    <p>
      I came across a cool problem on a recent coding assessment: find the table in your HTML document that has the highest count of table cells.
      I will start by showing my algorithmic thought process, then I will get into some code for the algorithm. I will not yet publish the complete
      code solution in the unlikely event that someone finds this post and uses it in the same coding assessment. So the method I will show you is
      how to count all of the cells of a single table.
    </p>
    <h2 class="subtitle">
      Simple Algorithm
    </h2>
    <strong>1. Get your table in HTML</strong>
    <p>
      Multiple tables can just be a simple <pre class="inline">document.getElementsByTagId('table')</pre>. This call will grab all table elements that
      are loaded in the DOM. However, the example I will show you is just for one table. So I will be using an Id selector instead.
    </p>
    <strong>2. Loop through each table's row</strong>
    <p>
      Below, I use the <pre class="inline">table.rows</pre> property. This can be a "gotcha", this property is not an <pre class="inline">Array</pre>, but
      the inevitable <pre class="inline">HtmlNodeCollection</pre>. Therefore, we cannot say <pre class="inline">table.rows.forEach((row) => { ... });</pre>
      Instead, we must use a <pre class="inline">for (let x of obj)</pre> type loop instead.
    </p>
    <strong>3. Count the cells</strong>
    <p>
      Once we have our loop working, we can access the <pre class="inline">row.cells</pre> property to access each row's list of cells. We do not need
      to null check the <pre class="inline">row.cells</pre> as row.cells will exist even if the row has no child cells.
    </p>
    <h2 class="subtitle">
      The code
    </h2>
    <strong>HTML</strong>
    <prism language="html" :code="codeSnippet1" />
    <strong>JavaScript</strong>
    <prism language="js" :code="codeSnippet2" />
    <br /> <br />
    <p>
      That's it! The algorithm is straightforward, the primary thing is to watch for that <pre class="inline">HtmlNodeColletion</pre>, it is not the same
      thing as an array in JavaScript so it won't have your typical iterators.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get codeSnippet1 () {
    return `<html>
  <table id="my-table">
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
    </tr>
</html>`
  }

  get codeSnippet2 () {
    return `getTableCellCount = (id) => {
  const table = document.getElementById(id)

  let count = 0
  for (let row of table.rows) {
    count += row.cells.length
  }

  return count
}`
  }
}
</script>
<style lang="scss" scoped>
</style>
