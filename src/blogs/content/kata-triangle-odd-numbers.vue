<template>
  <section>
    <h1 class="subtitle">
      Problem
    </h1>
    <p>
      Given a triangle of consecutive odd numbers, such as this below:
    </p>
    <img src="../../assets/odd-number-triangle.png" />
    <br /> <br />
    <p>
      Write a function that finds the sums of the odd numbers in an entire row from the row index. In example:
    </p>
    <prism :code="snippet1" language="python" />
    <h1 class="subtitle">
      Solution
    </h1>
    <prism :code="snippet2" language="python" />
    <h1 class="subtitle">
      Explanation
    </h1>
    <p>
      <strong>1.</strong> Calculate the starting number of each row.
    </p>
    <p>
      <strong>2.</strong> Calculate the end of each row.
    </p>
    <p>
      <strong>3.</strong> Itereate from "start" to "end" and increment by two, only counting the odd numbers.
    </p>
    <p>
      <strong>4.</strong> In the iterated loop, add the index to the sum that will eventually be returned
    </p>
    <strong>
      Step 1
    </strong>
    <br /> <br />
    <prism class="inline" language="python">start = (n * n) - (n - 1)</prism>
    <br /> <br /> <br />
    <p>
      <pre class="inline">start</pre> signifies the beginning number of the row <pre class="inline">n</pre>. To figure out this number, write the beginning
      of each row and the corresponding n to see if you can figure out the pattern. This is how I was able to calculate the start.
    </p>
    <div class="flex-column-center">
      <img src="../../assets/odd-number-triangle-start-highlight.png" width="max-content"/>
      <table class="table">
        <thead>
          <tr>
            <th>
              n
            </th>
            <th>
              start
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              1
            </td>
            <td>
              1
            </td>
          </tr>
          <tr>
            <td>
              2
            </td>
            <td>
              3
            </td>
          </tr>
          <tr>
            <td>
              3
            </td>
            <td>
              7
            </td>
          </tr>
          <tr>
            <td>
              4
            </td>
            <td>
              13
            </td>
          </tr>
          <tr>
            <td>
              5
            </td>
            <td>
              21
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <strong>
      Step 2
    </strong>
    <br /> <br />
    <prism class="inline" language="python">end = start + n * 2</prism>
    <br /> <br /> <br />
    <p>
      <pre class="inline">end</pre> signifies the ending number of the row. We want this number so we know when to stop the loop from iterating.
      Luckily we already have our starting number, so all we need to do is add n * 2. We use n because n is equal to the amount of numbers in the
      row. We double it because we need to skip even numbers.
    </p>
    <strong>
      Step 3 and Step 4
    </strong>
    <br /> <br />
    <prism :code="snippet3" language="python" />
    <p>
      Now we utilize our <pre class="inline">start</pre> and <pre class="inline">end</pre> variables in our range. Remember, <pre class="inline">range</pre>
      takes in parameters as such: <pre class="inline">range(start, end, incrementor)</pre>. So do not forget the 2 to skip your even numbers, otherwise
      you will add them all!
    </p>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get snippet1 () {
    return `row_sum_odd_numbers(1) # 1
row_sum_odd_numbers(3) # 7 + 9 + 11 = return 27`
  }

  get snippet2 () {
    return `def row_sum_odd_numbers(n):
    sum = 0
    start = (n * n) - (n - 1)
    end = start + n * 2
    for i in range(start, end, 2):
        sum += i
    return sum
`
  }

  get snippet3 () {
  return `for i in range(start, end, 2):
    sum += i`
  }
}
</script>
<style lang="scss" scoped>
</style>
