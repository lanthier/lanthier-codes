<template>
  <article>
    <p>
      As an online tutor, I've noticed one of the most common APIs students are asked to learn is the Open Weather API.
      Often teachers want their students to utilize something specific (ajax, fetch, etc.) in order to call the API.
    </p>
    <p>
      In this tutortial I will show you the AJAX, Fetch and XHR request methodologies for getting data from an API.
    </p>
    <h1 class="subtitle">
      The HTML
    </h1>
    <prism language="html" :code="codeSnippet1" />
    <strong>Note: </strong>
    <span>
      The <pre class="inline">script</pre> is the CDN library to allow for AJAX requests. Do not include
      this script if you aren't going to use AJAX.
    </span>
    <br /> <br />
    <h1 class="subtitle">
      JavaScript Part 1 - Reference HTML in your JavaScript
    </h1>
    <p>
      Now we need to reference our HTML elements in our JavaScript. <pre class="inline">document.getElementById()</pre>
      is one of the most common ways we get a specific HTML element into our JavaScript. This code will be the same
      regardless of which method you choose to use.
    </p>
    <prism language="javascript" :code="codeSnippet2" />
    <p>
      First, we store the button in a variable so we can use it on the next line. On the next line we are adding a
      click event listener with the <pre class="inline">addEventListener</pre> function. The first parameter is the
      type of event listener (click), the second is the function that we will call whenever that particular even is
      emitted from the element we are attaching it to.
    </p>
    <h1 class="subtitle">
      JavaScript - Ajax Call
    </h1>
    <a href="https://api.jquery.com/jquery.ajax/">Ajax Reference</a>
    <prism language="javascript" :code="codeSnippet3" />
    <strong>Note: </strong>
    <span>
      You'll need to add a reference to the AJAX library in order to use this. I like using the CDN.
    </span>
    <br /><br />
    <h1 class="subtitle">
      JavaScript - Fetch API
    </h1>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API Reference</a>
    <prism language="javascript" :code="codeSnippet4" />
    <p>
      This is my favorite way because it is native to the browser. The only downside is our favorite browser Internet
      Explorer doesn't support this. If you need to support Internet Explorer,
      <a href="https://github.com/github/fetch"> use a polyfill</a>.
    </p>
    <h1 class="subtitle">
      JavaScript - XHR request
    </h1>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHTTPRequest Reference</a>
    <prism language="javascript" :code="codeSnippet5" />
    <br />
    <h1 class="subtitle">
      Full example on GitHub
    </h1>
    <p>
      <a href="#https://github.com/lanthier/open-weather-api-requests">Full example here</a>. This version is slightly different because I wanted it to work by itself,
      but the actual request methodologies remain the same. I have three different buttons in this project that
      represent each methodology separately. After that, for each type of request, I store the variable rather
      than return it.
    </p>
  </article>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class OpenWeatherApi extends Vue {
  get codeSnippet1 () {
    return `<html>
  <body>
    <label>City name:</label>
    <input type="text" id="city-name-input" />
    <button id="api-button">Call api</button>
  </body>
</html>`
  }

  get codeSnippet2 () {
    return `  var button = document.getElementById('api-button');
  button.addEventListener('click', callWeatherApi); //Add event listener`
  }

  get codeSnippet3 () {
    return `async function callWeatherApi () {
    const cityNameInput = document.getElementById('city-name-input');
    const cityName = cityNameInput.value;
    return await $.ajax({
      type: "GET",
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    });
  }`
  }

  get codeSnippet4 () {
    return `async function callWeatherApi () {
    const cityNameInput = document.getElementById('city-name-input');
    const cityName = cityNameInput.value;
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey);
    return response.json();
  }`
  }

  get codeSnippet5 () {
    return `  async function callWeatherApi () {
    var cityNameInput = document.getElementById('city-name-input');
    var cityName = cityNameInput.value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey);
    xhr.send();
    let weatherData;
    xhr.onload = () => {
      weatherData = xhr.response;
    }
    return weatherData;
  }`
  }
}
</script>
<style lang="scss" scoped>
</style>
