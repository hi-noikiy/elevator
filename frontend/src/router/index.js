import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'
import Dash from '../pages/dash.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dash
    }
  ]
})
