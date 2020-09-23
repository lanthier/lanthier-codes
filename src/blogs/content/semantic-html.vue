<template>
  <article>
    <h1 class="subtitle">
      What is Semantic HTML?
    </h1>
    <p>
      Semantic HTML is HTML that uses semantic elements, which are elements that clearly describe what they mean
      from their tag names. A semantic element shows its meaning to both the browser and the programmer.
    </p>
    <strong>Non-semantic elements:</strong>
    <p>
      <pre class="inline">&lt;div&gt;</pre>
    </p>
    <p>
      <pre class="inline">&lt;span&gt;</pre>
    </p>
    <strong>Semantic elements:</strong>
    <table class="table">
      <thead>
        <tr>
          <th>
            Element
          </th>
          <th>
            Purpose
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre class="inline">&lt;address&gt;</pre>
          </td>
          <td>
            Text that represents an address. Note, this <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address">DOES NOT</a>
            need to be the author(s) of the document.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;article&gt;</pre>
          </td>
          <td>
            A self-contained, independent composition in the document intended to be independently distributable.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;aside&gt;</pre>
          </td>
          <td>
            Indirectly related to the document's main content, usually a sidebar.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;bdi&gt;</pre>
          </td>
          <td>
            Isolated text from its surrounding text for text directionality purposes.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;details&gt;</pre>
          </td>
          <td>
            For toggleable, optional text that the user doesn't need to see.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;dialog&gt;</pre>
          </td>
          <td>
            Dialog boxes and windows.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;figure&gt;</pre>
          </td>
          <td>
            A caption or legend describing other contents.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;footer&gt;</pre>
          </td>
          <td>
            Footer, typically contains author info and legal information.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;header&gt;</pre>
          </td>
          <td>
            Introductory content, logos, navigational aids, etc.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;main&gt;</pre>
          </td>
          <td>
            The dominant content of the document's <pre class="inline">&lt;body&gt;</pre>.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;mark&gt;</pre>
          </td>
          <td>
            Text which is marked or highlighted for reference or notation.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;menuitem&gt;</pre>
          </td>
          <td>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem">Deprecated - Do not use this</a>.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;meter&gt;</pre>
          </td>
          <td>
            A scalar value within a known range or a fractional value.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;nav&gt;</pre>
          </td>
          <td>
            Provides links within or outside of the current document.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;progress&gt;</pre>
          </td>
          <td>
            Indicates completion progress of a task.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;rp&gt;</pre>
          </td>
          <td>
            Fallback for the <pre class="inline">&lt;ruby&gt;</pre> element.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;rt&gt;</pre>
          </td>
          <td>
            Text component of a <pre class="inline">&lt;ruby&gt;</pre> annotation.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;ruby&gt;</pre>
          </td>
          <td>
            Shows pronunciation of East Asian characters.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;section&gt;</pre>
          </td>
          <td>
            Represents a standalone section in a document.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;summary&gt;</pre>
          </td>
          <td>
            Summary, caption or legend for a <pre class="inline">&lt;details&gt;</pre> disclosure box.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;time&gt;</pre>
          </td>
          <td>
            Represents a specific period in time.
          </td>
        </tr>
        <tr>
          <td>
            <pre class="inline">&lt;wbr&gt;</pre>
          </td>
          <td>
            Optional line break.
          </td>
        </tr>
      </tbody>
    </table>
    <h1 class="subtitle">
      Why use semantic HTML?
    </h1>
    <p>
      Per the <a href="https://www.w3.org/TR/WCAG20-TECHS/G115.html">W3</a>, the objective of semantic HTML is to mark up the structure
      of the web content using the appropriate semantic elements. In other words, the elements are used according to their
      meaning, not because of the way they appear visually.
    </p>
    <p>
      Per the <a href="https://www.w3.org/TR/WCAG20-TECHS/G115.html">W3</a>, using the appropriate semantic elements will make sure the
      structure is available to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent">user agent</a>.
    </p>
    <p>
      Humans and bots have an easier time reading semantic HTML. Rather than having 5 or 6 nested <pre class="inline">&lt;div&gt;</pre> elements,
      use other less generic-use elements to increase the readability of the content.
    </p>
    <p>
      Bots understanding your HTML markup better means better chances for ranking higher in SEO. Also, programs that assist users
      with accessibility issues can better read these elements and therefore give their users better accessibility to your website.
    </p>
    <h1 class="subtitle">
      How to use semantic HTML
    </h1>
    <p>
      Already have a working website? Identify where you are using <pre class="inline">&lt;div&gt;</pre> and <pre class="inline">&lt;span&gt;</pre>
      elements and replace them with others. Use the table I provided to see if your non-semantic elements have a meaning that matches one of the elements.
    </p>
    <strong>A sample common layout using semantic elements:</strong>
    <br /> <br />
    <img src="https://i.postimg.cc/zBYQDtSn/semantic-example.png" />
    <p>
      You can use the <pre class="inline">&lt;header&gt;</pre> to put your logos, site title, navigation menu, etc. Navigation typically lives
      in your <pre class="inline">&lt;header&gt;</pre> element.
    </p>
    <p>
      <pre class="inline">&lt;aside&gt;</pre> in this setup is great for side bars or for running mobile advertisements.
    </p>
    <p>
      <pre class="inline">&lt;article&gt;</pre> contains the actual content you want to give the user. In here, I prefer to use <pre class="inline">&lt;section&gt;</pre>
      elements to ward off sections of information if necessary.
    </p>
    <p>
      Copyright information and legal information such as Privacy Policies, Terms and Conditions or disclosures are great
      for the <pre class="inline">&lt;footer&gt;</pre>.
    </p>
    <strong>Navigation markup example:</strong>
    <br /> <br />
    <prism :code="snippet1" language="html" />
    <strong>Article markup example:</strong>
    <br /> <br />
    <prism :code="snippet2" language="html" />
    <p>
      There are a few different methods you can organize your <pre class="inline">&lt;section&gt;</pre> and <pre class="inline">&lt;article&gt;</pre> elements. This
      is the way I prefer. It is also acceptable to nest <pre class="inline">&lt;article&gt;</pre> elements inside of <pre class="inline">&lt;section&gt;</pre> elements.
    </p>
    <h1 class="subtitle">
      Further Resources on Semantic HTML
    </h1>
    <p>
      <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">W3 Schools on HTML Semantic Elements</a>
    </p>
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">Mozilla on semantics</a> - Look at what they have to say about
      semantics in HTML.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SemanticHtml extends Vue {
  get snippet1 () {
    return `<header>
  <img src="logo.png" />
  <h1>My Portfolio</h1>
  <nav class="right">
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </nav>
</header>`
  }

  get snippet2 () {
    return `<article>
  <header>
    <h1>Animals</h1>
  </header>
  <section>
    <h2>Sunbears</h2>
    <p>
      Sunbears are small bears that origin...
    </p>
  </section>
  <section>
    <h2>Penguins</h2>
    <p>
      Penguins are aquatic flightless birds...
    </p>
  </section>
  <section>
    <h2>Kids</h2>
    <p>
      Kids are another animal completely...
    </p>
  </section>
</article>`
  }
}
</script>
<style lang="scss" scoped>
</style>
