<template lang="html">
  <div>
    <div class="dash-head-clearfix"></div>
    <header class="dash-head-wrap">
      <div class="dash-head">
        <h1 class="dash-logo">Elevator <span class="dash-tagline">matches your Intercom leads to your products, team, and company.</span></h1>
        <div class="dash-hamburger-container">
          <span @click="toggleMenu" class="dash-hamburger-button">
            <font-awesome-icon :icon="['fas', 'bars']" class="dash-hamburger-icon"
              :class="{'active' : navMenu}"/>
          </span>
          <nav class="dash-nav-menu" :class="{'active' : navMenu}">
            <router-link class="dash-nav-link" :to="{ path: '/' }">Logout</router-link>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data: () => {
    return {
      navMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.navMenu = !this.navMenu
    }
  },
  components: {
    FontAwesomeIcon,
  },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/variables.scss';

  $header-height: 50px;

  .dash-head-clearfix {
    height: $header-height;
  }

  .dash-head-wrap {
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: $header-height;
    border-bottom: 1px solid $gray200;
    background-color: $white;
    z-index: 10;
  }

  .dash-head {
    display: grid;
    align-items: center;
    padding: 0 1rem;
    z-index: 100;
    grid-template-columns: minmax(300px, 900px) minmax(0, 300px);
  }

  .dash-logo {
    font-size: 18px;
    font-weight: 700;
  }

  .dash-tagline {
    display: none;
    font-size: 12px;
    font-weight: 300;

    @include tablet {
      display: initial;
    }
  }

  .dash-hamburger-container {
    display: flex;
    position: relative;
    margin-left: auto;
    z-index: 10;
  }

  .dash-hamburger-button {
    z-index: 2;
  }

  .dash-hamburger-icon {
    &:hover,
    &.active {
      color: $primary;
    }
  }

  .dash-nav-menu {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 200px;
    padding: 40px 0 .5rem;
    transform: scale(0);
    transform-origin: top right;
    transition: .2s transform ease-in, .2s opacity ease-in;
    border: 1px solid $gray200;
    background-color: $white;
    box-shadow: 0 2px 4px rgba($black, .3);
    opacity: 0;

    &.active {
      transform: scale(1);
      opacity: 1;
    }
  }

  .dash-nav-link {
    display: block;
    padding: .5rem 1.5rem;
    color: $gray400;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      color: $primary;
    }
  }
</style>
