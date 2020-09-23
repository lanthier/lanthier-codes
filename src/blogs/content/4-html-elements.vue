<template>
  <article>
    <p>
      While I was working through my blog post on semantic HTML elements, I learned there were
      a few elements that have interesting functionality that I've never used before. Some of these
      are because I have never had a use case for them, while others were just a surprise for me.
    </p>
    <h1 class="subtitle">
      &lt;bdi&gt;
    </h1>
    <hr />
    <p>
      BDI stands for Bi-Directional Isolation. The browser treats <pre class="inline">&lt;bdi&gt;</pre> tags
      to treat its text content separately from its surrounding text and sends the text through its
      <a href="https://www.w3.org/International/articles/inline-bidi-markup/uba-basics">bidirectional algorithm</a>.
    </p>
    <p>
      If you have text that reads right to left, such as an arabic quotation, and that text is surrounded by
      other texts that reads left to right, such as English, we need to use this element to tell the browser which
      direction to render the text.
    </p>
    <p>
      <strong>Example:</strong>
    </p>
    <prism :code="snippet1" language="html" />
    <p>
      <strong>Result:</strong>
    </p>
    <div class="result">
      <p><span>عبد الرحمٰن</span>: 5 points</p>
      <p><bdi>عبد الرحمٰن</bdi>: 5 points</p>
    </div>
    <p>
      While in this particular example we need to use the <pre class="inline">&lt;bdi&gt;</pre> element,
      the browser's bidirectional algorithm can usually figure out how to render the letters in proper order.
    </p>
    <p>
      <strong>Further reading on this element: </strong>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi">MDN reference for bdi</a>
    </p>
    <h1 class="subtitle">
      &lt;mark&gt;
    </h1>
    <hr />
    <p>
      <pre class="inline">&lt;mark&gt;</pre> applies to text that is highlighted or marked due to the
      text's relevance.
    </p>
    <p>
      <strong>Example:</strong>
    </p>
    <prism :code="snippet2" language="html" />
    <p>
      <strong>Result:</strong>
    </p>
    <div class="result">
      <p>
        Did you ever hear the tragedy of Darth Plagueis the Wise? I thought
        not. It's not a story the Jedi would tell you. It's a Sith legend.
        <mark>Darth Plagueis was a Dark Lord of the Sith</mark>, so powerful
        and so wise he could use the Force to influence the midichlorians to
        create life. He had such a knowledge of the dark side that he could even
        keep the ones he cared about from dying. The dark side of the Force is a
        pathway to many abilities some consider to be unnatural. He became so powerful,
        the only thing he was afraid of was losing his power, which eventually,
        of course, he did. Unfortunately, he taught his apprentice everything he
        knew, then his apprentice killed him in his sleep. It's ironic
        he could save others from death, but not himself.
      </p>
    </div>
    <p>
      The functional difference of this text is native-applied CSS that sets two properties: <pre class="inline">color: black</pre>
      and <pre class="inline">background-color: yellow</pre>. There may be some implied SEO benefits by using
      this tag as a best practice, though I haven't found evidence of that.
    </p>
    <p>
      The primary difference between <pre class="inline">&lt;mark&gt;</pre> and <pre class="inline">&lt;strong&gt;</pre>, from
      a semantic perspective, is that the <pre class="inline">&lt;mark&gt;</pre> element signifies <em>relevance</em>, whereas
      the <pre class="inline">&lt;strong&gt;</pre> element signifies the <em>importance</em>. It's because of of this that you
      should not use the <pre class="inline">&lt;mark&gt;</pre> to highlight syntax.
    </p>
    <p>
      Use cases for the <pre class="inline">&lt;mark&gt;</pre> element includes identifying context-sensitive passages and marking
      text of interest. Google search also uses this tag to highlight useful information on a website.
    </p>
    <p>
      <strong>Further reading: </strong>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark">MDN reference for mark</a>
    </p>
    <h1 class="subtitle">
      &lt;meter&gt;
    </h1>
    <hr />
    <p>
      The <pre class="inline">&lt;meter&gt;</pre> tag is used to signify a value within a known range or a fraction.
      Another element that comes close to this functionality is the <pre class="inline">&lt;progress&gt;</pre> element.
      Use the <pre class="inline">&lt;progress&gt;</pre> element to measure progress, such as form completion progress or loading. Use
      the <pre class="inline">&lt;meter&gt;</pre> element for other fractional or scalar representations.
    </p>
    <p>
      <strong>Attributes</strong>
    </p>
    <p>
      What I find most interesting about this element is the way it's attributes are used. Let's examine some attributes of interest with
      the <pre class="inline">&lt;meter&gt;</pre> element: <pre class="inline">min</pre>,
      <pre class="inline">max</pre>, <pre class="inline">low</pre>,
      <pre class="inline">high</pre>, <pre class="inline">optimum</pre>
      and <pre class="inline">value</pre>.
    </p>
    <p>
      <pre class="inline">value</pre> is the actual value or number in the range. This is what the
      <pre class="inline">&lt;meter&gt;</pre> element will represent on the bar.
    </p>
    <p>
      <pre class="inline">min</pre> and <pre class="inline">max</pre> are the minimum and maximum
      that the <pre class="inline">value</pre> attribute can be.
    </p>
    <p>
      <pre class="inline">low</pre> and <pre class="inline">high</pre> affect
      the color of the bar that represents the <pre class="inline">value</pre> attribute. The
      <pre class="inline">low</pre> will turn the bar yellow (by default) if
      <pre class="inline">value &lt; low</pre>. The bar will turn green by default if
      <pre class="inline">value &gt; high</pre>.
    </p>
    <p>
      The <pre class="inline">optimum</pre> attribute changes which range,
      <pre class="inline">min - low</pre> or <pre class="inline">high - max</pre>, sets the
      bar the "optimal" color. By default, the middle range is the optimum color. If you set
      <pre class="inline">optimum</pre> to a number between <pre class="inline">min</pre>
      and <pre class="inline">low</pre>, the low triggers the optimum color. If you set the
      <pre class="inline">optimum</pre> to the high ranger, it'll trigger the optimum color
      for a <pre class="inline">value</pre> between the <pre class="inline">high</pre> and
      <pre class="inline">max</pre> range.
    </p>
    <p>
      <strong>Examples</strong>
    </p>
    <p>
      I prefer a visual representation of <pre class="inline">&lt;meter&gt;</pre> and its attributes
      to learn it.
    </p>
    <p>
      <em>Note: I increased the size of the element using CSS for accessibility purposes.</em>
    </p>
    <strong>
      Middle Value, Default Optimal Range
    </strong>
    <div class="example-group">
      <prism :code="snippet3" language="html" />
      <meter min="0" max="10" low="3" high="7" value="5" />
    </div>
    <strong>
      Low value, Default Optimal Range
    </strong>
    <div class="example-group">
      <prism :code="snippet4" language="html" />
      <meter min="0" max="10" low="3" high="7" value="2" />
    </div>
    <strong>
      High Value, Default Optimal Range
    </strong>
    <div class="example-group">
      <prism :code="snippet5" language="html" />
      <meter min="0" max="10" low="3" high="7" value="9" />
    </div>
    <strong>
      High Value, High Optimum Range
    </strong>
    <div class="example-group">
      <prism :code="snippet6" language="html" />
      <meter min="0" max="10" low="3" high="7" optimum="8" value="9" />
    </div>
    <strong>
      Low Value, Low Optimum Range
    </strong>
    <div class="example-group">
      <prism :code="snippet7" language="html" />
      <meter min="0" max="10" low="3" high="7" optimum="2" value="1" />
    </div>
    <strong>
      Value Far Outside Optimal Range
    </strong>
    <div class="example-group">
      <prism :code="snippet8" language="html" />
      <meter min="0" max="10" low="3" high="7" optimum="2" value="9" />
    </div>
    <p>
      <strong>Learn by doing? Try it yourself:</strong>
    </p>
    <section class="do-it-meter">
      <div>
        <label for="min-value">min: </label>
        <input v-model="min" />
      </div>
      <div>
        <label for="max-value">max: </label>
        <input v-model="max" />
      </div>
      <div>
        <label for="max-value">low: </label>
        <input v-model="low" />
      </div>
      <div>
        <label for="max-value">high: </label>
        <input v-model="high" />
      </div>
      <div>
        <label for="max-value">optimum: </label>
        <input v-model="optimum" />
      </div>
      <div>
        <label for="max-value">value: </label>
        <input v-model="meterValue" />
      </div>
    </section>
    <meter :low="low" :high="high" :value="meterValue" :min="min" :max="max" :optimum="optimum" />
    <p>
      <strong>Change bar color on <pre class="inline">&lt;meter&gt;</pre> element</strong>
    </p>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>
              Psuedo Class
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre class="inline">-webkit-meter-optimum-value</pre>
            </td>
            <td>
              Color of the bar when <pre class="inline">value</pre> is in optimum range.
            </td>
          </tr>
          <tr>
            <td>
              <pre class="inline">-webkit-meter-suboptimum-value</pre>
            </td>
            <td>
              Color of the bar when <pre class="inline">value</pre> is outside optimum range.
            </td>
          </tr>
          <tr>
            <td>
              <pre class="inline">-webkit-meter-even-less-good-value</pre>
            </td>
            <td>
              The terrible name for the color of bar when <pre class="inline">value</pre> is far outside optimum range.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Further reading: </strong>
        <a href="https://css-tricks.com/html5-meter-element/">CSS Tricks Meter Element</a>
      </p>
      <h1 class="subtitle">
        <pre class="inline">&lt;ruby&gt;</pre>, <pre class="inline">&lt;rt&gt;</pre>, <pre class="inline">&lt;rp&gt;</pre>
      </h1>
      <p>
        <pre class="inline">&lt;ruby&gt;</pre> represents a <a href="https://www.w3.org/TR/2001/REC-ruby-20010531/Overview.html.utf-8">ruby annotation</a>.
        A ruby is a short run of text that supplements some base text, typically used with Asian characters to provide annotations
        or pronunciations. While we typically use ruby with Asian texts, ruby can be any supplemental text.
      </p>
      <p>
        <pre class="inline">&lt;ruby&gt;</pre> wraps the <pre class="inline">&lt;rt&gt;</pre> and <pre class="inline">&lt;rp&gt;</pre>
        elements. In order to use the The <pre class="inline">&lt;rt&gt;</pre> and <pre class="inline">&lt;rp&gt;</pre> elements, they must
        be wrapped in <pre class="inline">&lt;ruby&gt;</pre> along with the base text.
      </p>
      <p>
        The <pre class="inline">&lt;rt&gt;</pre> element specifies the subtext component of the ruby annotation. This can provide supplemental information
        such as pronunciation, transliteration or translation for East Asian typography.
      </p>
      <p>
        The <pre class="inline">&lt;rp&gt;</pre> element stands for ruby parenthesis (HTML Ruby Fallback Parenthesis). If a browser does not support the
        <pre class="inline">&lt;ruby&gt;</pre> element, they will fallback to use parenthesis instead. Note that most browsers support
        <pre class="inline">&lt;ruby&gt;</pre>, I just thought this was cool.
      </p>
      <p>
        <strong>Example</strong>
      </p>
      <prism :code="snippet9" lang="html" />
      <p>
        <strong>Result:</strong>
      </p>
      <div class="result">
        <ruby>
          漢<rp>(</rp><rt>かん</rt><rp>)</rp>
        </ruby>
      </div>
    </div>
    <p>
      <strong>Further reading: </strong>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby">MDN reference for ruby, </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt">MDN reference for rt</a>
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  min = 0;
  max = 100;
  meterValue = 50;
  low = 33;
  high = 66;
  optimum!: number;

  get snippet1 () {
    return `<p><span>عبد الرحمٰن</span>: Professor</p>
<p><bdi>عبد الرحمٰن</bdi>: Professor</p>`
  }

  get snippet2 () {
    return `<p>
Did you ever hear the tragedy of Darth Plagueis the Wise? I thought
not. It's not a story the Jedi would tell you. It's a Sith legend.
<mark>Darth Plagueis was a Dark Lord of the Sith</mark>, so powerful
and so wise he could use the Force to influence the midichlorians to
create life. He had such a knowledge of the dark side that he could even
keep the ones he cared about from dying. The dark side of the Force is a
pathway to many abilities some consider to be unnatural. He became so powerful,
the only thing he was afraid of was losing his power, which eventually,
of course, he did. Unfortunately, he taught his apprentice everything he
knew, then his apprentice killed him in his sleep. It's ironic 
he could save others from death, but not himself.
</p>`
  }

  get snippet3 () {
    return '<meter min="0" max="10" low="3" high="7" />'
  }

  get snippet4 () {
    return '<meter min="0" max="10" low="3" high="7" value="2"/>'
  }

  get snippet5 () {
    return '<meter min="0" max="10" low="3" high="7" value="9"/>'
  }

  get snippet6 () {
    return '<meter min="0" max="10" low="3" high="7" optimum="8" value="9" />'
  }

  get snippet7 () {
    return '<meter min="0" max="10" low="3" high="7" optimum="2" value="1" />'
  }

  get snippet8 () {
    return '<meter min="0" max="10" low="3" high="7" optimum="2" value="9" />'
  }

  get snippet9 () {
    return `<ruby>
  漢<rp>(</rp><rt>かん</rt><rp>)</rp>
</ruby>`
  }

  data () {
    return {
      optimum: this.optimum
    }
  }
}
</script>
<style lang="scss" scoped>
.result {
  background: #F5F5F5;
  margin: 8px;
  padding: 8px;
}

meter {
  width: 100%;
  height: 50px;
}

.example-group {
  margin: 16px 0px;

  pre {
    margin-bottom: 0px;
  }
}

.do-it-meter {
  display: flex;

  div {
    margin-bottom: 8px;
  }

  input {
    width: 64px;
    margin-right: 8px;
  }
}

.table {
  max-width: 100%;
}

@media only screen and (max-width: 1023px) {
  .do-it-meter {
    flex-direction: column;
  }
}
</style>
