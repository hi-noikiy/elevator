import Vue from 'vue'
import router from './router'
import store from './store'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import regular from '@fortawesome/fontawesome-pro-regular'
import light from '@fortawesome/fontawesome-pro-light'
import brand from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid, regular, light, brand)

const app = new Vue({
  el: '#app',
  router,
  store,
}).$mount('#app')
