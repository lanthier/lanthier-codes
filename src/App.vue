<template>
  <div id="app">
    <!-- <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a
          ref="burger"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="menu"
          @click="toggleBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="menu" ref="menu" class="navbar-menu">
        <div class="navbar-start">
          <template v-for="route in routes">
            <a v-if="route.meta.nav" :key="route.path" class="navbar-item"><router-link :to="route.path">{{ route.meta.displayName }}</router-link></a>
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  get routes () {
    console.log(this.$router.options.routes)
    return this.$router.options.routes
  }

  toggleBurger () {
    const burger = this.$refs.burger
    const menu = this.$refs.menu

    if (burger.classList.contains('is-active')) {
      burger.classList.remove('is-active')
      menu.classList.remove('is-active')
    }
    else {
      burger.classList.add('is-active')
      menu.classList.add('is-active')
    }
  }
}
</script>
<style lang="scss">
@import "styles/index.scss";
</style>
