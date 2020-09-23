<template>
  <article>
    <p>
      As a tutor one of the most common beginner Python tasks I come across is formatting strings.
      In this post, I will show you a few different ways to can go about formatting your code and also how to support multiple values
      in your string formats. We will start with the <pre class="inline">%</pre> method and then move to the
      <pre class="inline">.format()</pre> function.
    </p>
    <strong>Single format using <pre class="inline">%</pre></strong>
    <prism :code="codeSnippet1" language="python" />
    <p>
      The variables to the right of the <pre class="inline">%</pre> symbol represent the variables that will replace
      the <pre class="inline">%s</pre> in the string on the left. The <pre class="inline">s</pre> in <pre class="inline">%s</pre>
      represents the data type of your variable. In this case, it is a string.
    </p>
    <strong>Multi format using <pre class="inline">%</pre></strong>
    <prism :code="codeSnippet2" language="python" />
    <p>
      This time on the right-hand side of the expression, you see <pre class="inline">(name, birthday)</pre>. This is a tuple.
      The <pre class="inline">%</pre> operator can take in a single value or a tuple of multiple values. Then, it will apply
      the variables inside of the tuple in order from left to right to your string you wish to be formatted.
    </p>
    <p>
      Before I show you the <pre class="inline">.format()</pre> method, here are some useful data types you can use:
    </p>
    <table class="table">
      <tbody>
        <tr>
          <td><pre class="inline">%s</pre></td>
          <td>String (can also use other data types that handle strings)</td>
        </tr>
        <tr>
          <td><pre class="inline">%d</pre></td>
          <td>Integer</td>
        </tr>
        <tr>
          <td><pre class="inline">%f</pre></td>
          <td>Float (A decimal number)</td>
        </tr>
        <tr>
          <td><pre class="inline">%f</pre></td>
          <td>Float (A decimal number)</td>
        </tr>
        <tr>
          <td><pre class="inline">%.2f</pre></td>
          <td>Float that only have two decimal places, common for currency. You can replace 2 with another number.</td>
        </tr>
      </tbody>
    </table>
    <strong>Single format using <pre class="inline">.format()</pre></strong>
    <prism :code="codeSnippet3" language="python" />
    <p>
      Here I am using <pre class="inline">{0}</pre> to indicate the 0th parameter in my format function. You can also use
      <pre class="inline">{:}</pre> to indicate the "next" parameter.
    </p>
    <strong>Multi format using <pre class="inline">.format()</pre></strong>
    <prism :code="codeSnippet4" language="python" />
    <p>
      In terms of using single and multiple formats, that's all there really is to it. These can get pretty complex based on the
      data types you are using and how exactly you need them formatted. I will be releasing a cheat sheet shortly along with my
      first interactive blog post in how to deal with these.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FormatMultipleVals extends Vue {
  get codeSnippet1 () {
    return `name = 'Alex'
welcome_message = 'Welcome, %s' % name
print(welcome_message)`
  }

  get codeSnippet2 () {
    return `name = 'Alex'
birthday = 'January 10th'
birthday_message = 'My name is %s and I was born on %s' % (name, birthday)
print(birthday_message)`
  }

  get codeSnippet3 () {
    return `name = 'Alex'
welcome_message = 'Welcome, {0}'.format(name)
print(welcome_message)
`
  }

  get codeSnippet4 () {
    return `name = 'Alex'
birthday = 'January 10th'
birthday_message = 'My name is {0} and I was born on {1}'.format(name, birthday)
print(birthday_message)`
  }
}
</script>
