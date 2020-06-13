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

      <div ref="menu" id="menu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"><router-link to="/">HTML/CSS</router-link></a>
          <a class="navbar-item"><router-link to="/">JavaScript</router-link></a>
          <a class="navbar-item"><router-link to="/">Python</router-link></a>
          <a class="navbar-item"><router-link to="/">C#</router-link></a>
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
