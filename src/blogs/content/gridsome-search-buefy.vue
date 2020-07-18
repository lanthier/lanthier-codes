<template>
  <section>
    <p>
      Hooking up flexsearch in your gridsome site can really take your website to the next level. Here I will show you
      how you can hook up flexsearch to your <pre class="inline">&lt;b-autocomplete&gt;</pre> elements. We will start with basics on
      hooking up the gridsome flexsearch plugin then move into a specific implemenetation with Buefy.
    </p>
    <br />
    <h1 class="subtitle">
      Setup Buefy
    </h1>
    <p>
      The <a href="https://buefy.org/documentation/start" target="_blank">documentation</a> will explain more in detail about getting started
      on Buefy. Here I will do a basic setup.
    </p>
    <br />
    <p>
      Install Buefy with yarn. If you using npm, use <pre class="inline">npm install buefy</pre>
    </p>
    <prism :code="codeSnippet1" language="powershell" />
    <br />
    <p>
      Tell Vue to use Buefy. I am just going to use the entirety of Buefy, refer to the link I provided above for a modular setup.
    </p>
    <prism :code="codeSnippet2" language="javascript" />
    <p>
      Notice that we also pushed a style sheet to the head element of our html. We do this because Buefy uses font awesome. This
      is how you can integrate stylesheets with gridsome. Another way you can do this is
      <a href="https://gridsome.org/docs/overriding-index/" target="_blank">overriding the index.html</a> and providing the
      stylesheet in that manner.
    </p>
    <br />
    <h1 class="subtitle">
      Setup the flexsearch plugin
    </h1>
    <p>
      I recommend you refer to the actual <a href="https://gridsome.org/plugins/gridsome-plugin-flexsearch" target="_blank">documentation</a>
      for anything beyond our basic setup.
    </p>
    <prism :code="codeSnippet3" language="powershell" />
    <br />
    <prism :code="codeSnippet4" language="javascript" />
    <p>
      <pre class="inline">typeName</pre> is the type we are indexing for search. In our case we have an existing type called Post in our project.
    </p>
    <p>
      <pre class="inline">searchFields</pre> are the fields that are searchable and what will be the actual indexed field in the search.
    </p>
    <p>
      <pre class="inline">fields</pre> are what will actually come back on each object in your search result.
    </p>
    <p>
      For more detailed information, refer to the link I posted above.
    </p>
    <br />
    <h1 class="subtitle">
      Make an autocomplete search field utilizing Buefy and flexsearch
    </h1>
    <p>
      Now that both flexsearch and Buefy are setup, lets make our autocomplete search field that searches for our posts. The example
      is as minimal as I can make it to demonstrate the base functionality. Keep this in mind as there are many useful and recommended
      properties on <pre class="inline">&lt;b-autocomplete&gt;</pre>.
    </p>
    <br />
    <prism :code="codeSnippet5" language="html" />
    <prism :code="codeSnippet6" language="javascript" />
    <br />
    <p>
      We can actually call the search using <pre class="inline">$search.search</pre>. Since eventually we use the search results
      to also populate the autocomplete dropdown, we are going to limit are query to 5 Posts.
    </p>
    <p>
      The <pre class="inline">v-model</pre> binding is a two-way binding to what is actually typed in the input. This wil be stored
      in the <pre class="inline">query</pre> property.
    </p>
    <p>
      The <pre class="inline">data</pre> property consists of the actual autocomplete results.
    </p>
    <p>
      <pre class="inline">searchResults</pre> refers to the acutal results from the search. I made this a computed for reactivity.
    </p>
    <p>
      <pre class="inline">searchResultsByTitle</pre> is a computed that plucks the title field off of the actual search results. This
      is how we are populating the autocomplete dropdown.
    </p>
    <p>
      <pre class="inline">searchResultsToRender</pre> is a nice to have I threw in this sample. We can render our search results
      however we'd like. I populate this property on the <pre class="inline">selected</pre> event. With this list, I then render
      the <pre class="inline">&lt;PostCard&gt;</pre>s with the results.
    </p>
    <br />
    <p>
      That's all! This is a base setup and I'd highly recommend you read through the documentation links I've provided in regards
      to setting up your projects. I created this post because I couldn't find anything from a quick search on how to actually hook
      up this particular setup. Hope you found it useful!
    </p>
  </section>
</template>
<script>

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GridsomeSearchBuefy extends Vue {
  get codeSnippet1 () {
    return 'yarn add buefy'
  }

  get codeSnippet2 () {
    return `import Buefy from "buefy";
import "~/assets/style/index.scss";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
  });
  Vue.use(Buefy);
}`
  }

  get codeSnippet3 () {
    return 'yarn add gridsome-plugin-flexsearch'
  }

  get codeSnippet4 () {
    return `//gridsome.config.js
module.exports = {
  //...
  plugins: [
    //...
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title'],
        collections: [
          {
            typeName: 'Post',
            indexType: 'Post',
            fields: ['title', 'description', 'path']
          }
        ]
      }
    }
  ]
}`
  }

  get codeSnippet5 () {
    return `<template>
  <section class="container">
    <b-field label="Search Reviews">
      <b-autocomplete
        v-model="query"
        :data="searchResultsByTitle"
        icon="magnify"
        @select="listResults">
        <template slot="empty">No results found</template>
      </b-autocomplete>
    </b-field>
    <PostCard v-for="result in searchResultsToRender" :key="result.id" :post="result.node" />
  </section>
</template>`
  }

  get codeSnippet6 () {
    return `import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    PostCard
  },
  computed: {
    searchResults () {
      const searchTerm = this.query
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    },
    searchResultsByTitle () {
      return this.searchResults.map(result => result.title)
    }
  },
  data: () => ({
    query: "",
    searchResultsToRender: []
  }),
  methods: {
    listResults() {
      this.searchResultsToRender = this.searchResults
    }
  }
}`
  }
}
</script>
