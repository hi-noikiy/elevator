import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import regular from '@fortawesome/fontawesome-pro-regular'
import brand from '@fortawesome/fontawesome-free-brands'

fontawesome.config = {
  autoAddCss: false
}

fontawesome.library.add(solid, regular, brand)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
