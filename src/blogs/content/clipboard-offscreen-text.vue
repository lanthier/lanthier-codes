<template>
  <article>
    <p>
      There is a surprising amount of bad or overcomplicated solutions on the web for copying offscreen text onto the
      user's clipboard in JavaScript/Typescript. While working one day I needed to fulfill a requirement of copying
      a link associated with some of our data, this is when I stumbled upon clipboard behavior in browsers.
    </p>
    <h1 class="subtitle">
      The problem
    </h1>
    <p>
      The problem is that it is a browser security problem to write text directly to a user's clipboard. The user
      needs to have an in-browser selection of the text that they wish to copy. Luckily for us, we have a work around.
    </p>
    <h1 class="subtitle">
      The solution
    </h1>
    <prism :code="snippet1" language="typescript" />
    <p>
      And that's it! There are many solutions on Stack Overflow, codepen and other blogs that provide overcomplicated and
      long solutions but it is this simple. For those of you that are new to web development, let me show you to populate
      your text variable based on what you are doing.
    </p>
    <p><strong>
      Copy your current url to the user's clipboard:
    </strong></p>
    <prism :code="snippet2" language="typescript" />
    <p><strong>
      Copy text from an existing element to the user's clipboard:
    </strong></p>
    <prism :code="snippet3" language="html" />
    <prism :code="snippet4" language="typescript" />
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BlogName extends Vue {
  get snippet1 () {
    return `copy() {
  let yourCopyText = "Whatever you need to copy goes here";
  let tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.style.top = "-1000px";
  tempInput.value = yourCopyTextHere;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Success! Your text has been copied!");
}`
  }

  get snippet2 () {
    return `copyUrlToClipboard() {
  const currentUrl = window.location.href;
  let tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.style.top = "-1000px";
  tempInput.value = currentUrl;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Current URL copied to clipboard.");
}`
  }

  get snippet3 () {
    return `<html>
  <body>
    <p>Your code is <span id="copyable">3432</span>.</p>
  </body>
</html>`
  }

  get snippet4 () {
    return `copySpanToClipboard() {
  const copyableSpan = document.getElementById('copyable');
  let tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.style.top = "-1000px";
  tempInput.value = copyableSpan.value; // Use the value property
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Your code has been copied!");
}`
  }
}
</script>
<style lang="scss" scoped>
</style>
