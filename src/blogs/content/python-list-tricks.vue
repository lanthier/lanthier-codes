<template>
  <section>
    <p>
      My journey learning Python started with teaching a friend how to code. My friend had a Python class
      he needed to prepare for so I was willing to teach him all of the basics by learning Python myself.
      It wasn't until I stumbled upon list in Python when learning this language kept me up at night with excitement.
    </p>
    <p>
      This post will explore the list features of Python that I fell in love with when I first started. Keep in mind, I'm
      not necessarily advocating for these features. I just think they're cool and they are different than some of the
      other languages I use everyday.
    </p>
    <h2 class="subtitle">
      Negative indicies
    </h2>
    <p>
      In Python you can reference items of a list using negative numbers. If you didn't already know this, stop for a moment and critically think.
      <em>What do you think a negative list index represents in Python? What do you think a negative list index SHOULD represent?</em>
    </p>
    <p>
      In Python, a negtaive list index means you traverse the list going from right to left instead of left to right.
      If you were wrong, don't sweat it. This is just how Python created the language, you could have a better idea for an
      list implementation of your own! Anyway, lets look at an example.
    </p>
    <prism language="python" :code="codeSnippet1" />
    <p>
      <pre class="inline">a_list[-1]</pre> is equivalent to the last item of the list.
      <pre class="inline">a_list[-2]</pre> would be the second to last. The negative indices will always start at the
      end of the list, and move toward the front.
    </p>
    <h2 class="subtitle">
      Sublists
    </h2>
    <p>
      While it is not uncommon for a language to support sublists, I really like the syntax for grabbing a range of
      values out of a list in python.
    </p>
    <prism language="python" :code="codeSnippet2" />
    <p>
      <pre class="inline">travel_list[2:4]</pre> says start at index 2 and go until index 4.
      <pre class="inline">travel_list[-4:-2]</pre> would start 4 indicies from the right and go until 2 indicies from the right.
      I think this syntax is awesome! It's easy to read and pretty consistant. Let's look at an advanced example.
    </p>
    <prism language="python" :code="codeSnippet3" />
    <p>
      Both of these lines are doing the same thing, the first line is just doing it implicitly. There are two things going on
      here. Firstly, if we don't provide a number, a default value will be used. The third parameter, 2, means we will select
      every 2nd number.
    </p>
    <p>
      Syntax to slice a list: <pre class="inline">list[{start} : {stop} : {increment}]</pre>
    </p>
    <p>
      While I don't recommend reversing a list like this (I prefer <pre class="inline">list.reverse()</pre>), you can use
      this method of list slicing to reverse a list:
    </p>
    <prism language="python" :code="codeSnippet4" />
    <h2 class="subtitle">
      Joining lists
    </h2>
    <p>
      Joining lists is another trick in Python that I absolutely love the syntax for.
    </p>
    <prism language="python" :code="codeSnippet5" />
    <p>
      I'll stop here for now. These are some cool tricks that I really liked with Python lists! If I can remember
      any additional tricks I will update this post with some more.
    </p>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get codeSnippet1 () {
    return `a_list = [ 'Bear', 'Penguin', 'Otter' ]

last_element = a_list[-1]

print(last_element) # Otter`
  }

  get codeSnippet2 () {
    return `travel_list = [ 'Thailand', 'Peru', 'Argentina', 'Phillipines', 'Mexico']

print(travel_list[2:4]) # ['Argentina', 'Phillipines']`
  }

  get codeSnippet3 () {
    return `travel_list = [ 'Thailand', 'Peru', 'Argentina', 'Phillipines', 'Mexico']

print(travel_list[0:5:2]) # ['Thailand', 'Argentina', 'Mexico']

print(travel_list[::2]) # ['Thailand', 'Argentina', 'Mexico']`
  }

  get codeSnippet4 () {
    return `travel_list = [ 'Thailand', 'Peru', 'Argentina', 'Phillipines', 'Mexico']

print(travel_list[::-1]) # ['Mexico', 'Phillipines', 'Argentina', 'Peru', 'Thailand'] # Reverses the list`
  }

  get codeSnippet5 () {
    return `list_1 = ['Turtle', 'Unicorn', 'Flamingo']

list_2 = ['Griffin', 'Worm']

list_3 = list_1 + list_2

print(list_3) # ['Turtle', 'Unicorn', 'Flamingo', 'Griffin', 'Worm']`
  }
}
</script>
<style lang="scss" scoped>
.subtitle {
  margin-top: 20px;
}
</style>
