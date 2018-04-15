<template>
<main class="login container">
  <div class="login-widget">
    <div class="login-logo-container">
      <h1 class="login-logo">Elevator</h1>
    </div>
    <float-label :label="'Email'">
      <input class="input" type="email" v-model="email">
    </float-label>
    <float-label :label="'Password'">
      <input class="input" type="password" v-model="password">
    </float-label>
    <ul>
      <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <button class="solid-button" @click="login">Login</button>
    <div class="login-utilities">
      <span class="link">register</span>
      <span class="link">forgot password</span>
    </div>
  </div>
</main>
</template>

<script>
import router from '../router'
import floatLabel from '../components/shared/float-label'

export default {
  data: function() {
    return {
      email: null,
      password: null,
      errors: []
    }
  },
  router,
  methods: {
    login() {
      this.validate()
      if (!this.errors.length) {
        router.push({ path: 'dashboard' })
      }
    },
    validate() {
      this.errors = []
    }
  },
  components: {
    floatLabel
  }
}
</script>

<style lang="scss">
@import '../assets/variables.scss';
@import '../assets/styles.scss';
</style>
