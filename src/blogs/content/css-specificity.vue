<template>
  <section>
    <h1 class="subtitle">
      What is CSS Specificity?
    </h1>
    <p>
      CSS Specificity is the selection of the most specific CSS rule when it is conflicting with another rule. This article is
      about how the most specific CSS rule gets chosen and when our browsers decide that a rule is conflicting.
    </p>
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">
        MDN Definition
      </a>
      - Specificity is a weight that is applied to a given CSS declaration, determined by the number of each selector type in the
      matching selector.
    </p>
    <h1 class="subtitle">
      CSS Rule Conflicts
    </h1>
    <p>
      CSS rule conflicts happen when CSS selectors select the same element and try to apply the same CSS rule to that element.
      While the name might sound scary, these aren't merge conflicts. CSS rule conflicts aren't bad by themselves, they are
      common in larger projects and projects that use external CSS resources. The problem is CSS specificity is a common "gotcha"
      when styles aren't showing up on your elements.
    </p>
    <strong>Example</strong>
    <prism language="css" :code="codeSnippet1" />
    <strong>Result: </strong>
    <button class="button-class">
      Click me
    </button>
    <br /> <br />
    <p>
      This is a CSS rule conflict between two selectors. <pre class="inline">button {</pre> is trying to set background-color property
      of all buttons to red. <pre class="inline">.button {</pre> is trying to set the background-color property to purple. This is a CSS
      rule conflict. The CSS rule that gets select is the rule inside of <pre class="inline">.button</pre> because it is more <em>specific</em>.
    </p>
    <h1 class="subtitle">
      CSS Style Specificity Calculation
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th>
            Rank/Score
          </th>
          <th>
            Selector
          </th>
          <th>
            Example
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            1
          </th>
          <td>
            Type selectors
          </td>
          <td>
            <pre class="inline">button</pre> <pre class="inline">span</pre> <pre class="inline">p</pre> <pre class="inline">table</pre>
          </td>
        </tr>
        <tr>
          <th>
            2
          </th>
          <td>
            Class selectors
          </td>
          <td>
            <pre class="inline">.button-class</pre> <pre class="inline">.subtitle</pre>
          </td>
        </tr>
        <tr>
          <th>
            2
          </th>
          <td>
            Psuedo class selectors
          </td>
          <td>
            <pre class="inline">:hover</pre> <pre class="inline">:disabled</pre>
          </td>
        </tr>
        <tr>
          <th>
            2
          </th>
          <td>
            Attribute selectors
          </td>
          <td>
            <pre class="inline">input[type="button"]</pre> <pre class="inline">a[href$=".com"]</pre>
          </td>
        </tr>
        <tr>
          <th>
            3
          </th>
          <td>
            ID selectors
          </td>
          <td>
            <pre class="inline">#button-id</pre> <pre class="inline">#main-content</pre>
          </td>
        </tr>
        <tr>
          <th>
            4
          </th>
          <td>
            Inline style
          </td>
          <td>
            <pre class="inline"> {{ codeSnippet2 }} </pre>
          </td>
        </tr>
        <tr>
          <th>
            5
          </th>
          <td>
            !important
          </td>
          <td>
            <pre class="inline">color: pink !important;</pre> <pre class="inline">flex-direction: column !important;</pre>
          </td>
        </tr>
      </tbody>
    </table>
    <strong>1 = Least specific  5 = Most specific</strong>
    <br /> <br />
    <p>
      ID selector styles will override class selector styles, class selector styles will override element selectors, etc. An <em>important</em> thing to note here is that
      inline styles and the <pre class="inline">!important</pre> selector have the highest scores on this table. That means that they will override any other type of
      selector's CSS rules. CSS specificity is the primary why the usage of these two types of styling are discouraged. That being said, as a software engineer I understand
      there are times where you must use these selectors for non-perfect world scenarios.
    </p>
    <h1 class="subtitle">
      More on Specificity
    </h1>
    <strong>Class order matters</strong>
    <prism language="html" :code="codeSnippet3" />
    <prism language="css" :code="codeSnippet4" />
    <strong>Result: </strong><span class="purple-text green-text">The second class overwrites the first.</span>
    <br /> <br />
    <strong>When to use <pre class="inline">!important</pre></strong>
    <p>
      I recommend against using <pre class="inline">!important</pre>. The specificity and the fact that you need to place it on a per-property basis makes
      your styles harder to maintain and difficult to debug. That being said, sometimes there are no other options but to use it. The bottom line is only
      use <pre class="inline">!important</pre> if you don't have control over what you are overriding.
    </p>
    <div class="content">
      <ul>
        <li>
          Overriding inline styles. This is something I've had to do before when using large amounts of stored web scraped html content data. Sometimes
          there are no other options.
        </li>
        <li>
          Overriding high specificity. Only if you do not have control over high specificity. If you have control over the CSS that has the high specificity,
          either write a higher specificity selector or remove the high specificity in the first place.
        </li>
      </ul>
    </div>
    <strong>Specificity Algorithm</strong>
    <p>
      If you are the kind of person that wants to know more than a top level overview, <a href="https://www.w3.org/TR/CSS1/#cascading-order" target="_blank">read this</a>.
      There is an algorithm that you can use to calculate specificity. If you don't like reading documentation but are curious, here is a sample calculation:
    </p>
    <div class="content">
      <ol>
        <li>
          Count the ID attributes in the selector. (<strong>A</strong> = # of ID attributes)
        </li>
        <li>
          Count the class attributes in the selector. (<strong>B</strong> = # of class attributes)
        </li>
        <li>
          Count the number of element names in the selector. (<strong>C</strong> = # of element names)
        </li>
        <li>
          (A x 100) + (B x 10) + C = Specificity score.
        </li>
      </ol>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>
            Selector
          </th>
          <th>
            # of ID attributes
          </th>
          <th>
            # of class attributes
          </th>
          <th>
            # of element names
          </th>
          <th title="Specificity score = ids x 100 + classes x 10 + element names">
            Specificity score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre class="inline">button</pre>
          </td>
          <td>
            0
          </td>
          <td>
            0
          </td>
          <td>
            1
          </td>
          <td>
            1
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">button span</pre>
          </td>
          <td>
            0
          </td>
          <td>
            0
          </td>
          <td>
            2
          </td>
          <td>
            2
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">button span.red-text</pre>
          </td>
          <td>
            0
          </td>
          <td>
            1
          </td>
          <td>
            2
          </td>
          <td>
            12
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">#submit-button</pre>
          </td>
          <td>
            1
          </td>
          <td>
            0
          </td>
          <td>
            0
          </td>
          <td>
            100
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get codeSnippet1 () {
    return `button {
  background-color: red;
}

.button-class {
  background-coor: purple;
}`
  }

  get codeSnippet2 () {
    return '<button style="color: pink">Click me!</button>'
  }

  get codeSnippet3 () {
    return '<span class="purple-text green-text">The second class overwrites the first.</span>'
  }

  get codeSnippet4 () {
    return `.purple-text {
  color: purple;
}

.green-text {
  color: green;
}`
  }
}
</script>
<style lang="scss" scoped>
button {
  background-color: red;
}

.button-class {
  background-color: purple;
}

.purple-text {
  color: purple;
}

.green-text {
  color: green;
}
</style>
