<template>
  <div id="app">
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="logo" to="/">
          <img alt="Vue logo" src="./assets/logo.png" />
        </router-link>
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
            <router-link v-if="route.meta.nav" :key="route.path" class="navbar-item four-corners" :to="route.path" @click.native="toggleBurger">
              <span>{{ route.meta.displayName }}</span>
            </router-link>
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light" href="malito:lanthier72@gmail.com">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container" />
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  get routes () {
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

.four-corners {
  margin: 0px 8px;
  border: .15em solid #212121;
  @media only screen and (min-width: 1024px) {
    &:hover, &.router-link-active {
      padding: .75em;
      border: 0.15em solid white;
      position: relative;

      &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        background: #212121;
      }

      &::before {
        top: -0.3em;
        bottom: -0.3em;
        left: .75em;
        right: .75em;
      }

      &::after{
        left: -0.3em;
        right: -0.3em;
        top: .75em;
        bottom: .75em;
      }

      span {
        z-index: 1;
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    &.router-link-active {
      background-color: white;
      color: black;
    }
  }
}

.logo {
  display: flex;
  align-items: center;
}

.container {
  margin-top: 32px;
}

.inline {
  display: inline;
  padding: 4px;
}
</style>
