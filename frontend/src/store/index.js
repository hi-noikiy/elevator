import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      newForm: false,
      activeMatchForm: '',
      activeMatch: {},
      matches: [{
        type: 'company',
        name: 'Google',
        url: 'google.com',
        linkedIn: null,
        additionalText: null,
        features: null,
      },{
        type: 'offer',
        name: 'Free Pizza',
        url: 'https://www.villagepizzamenu.com/',
        additionalText: null,
        features: null,
      },{
        type: 'service',
        name: 'TurboTax',
        url: 'https://turbotax.intuit.com/',
        additionalText: null,
        features: null,
      },{
        type: 'product',
        name: 'iPhone',
        url: 'apple.com',
        additionalText: null,
        features: null,
      },{
        type: 'industry',
        name: 'Cake Baking',
        url: 'cakes.com',
        additionalText: null,
        features: null,
      },{
        type: 'teamMember',
        name: 'James Bond',
        email: null,
        linkedIn: null,
        facebook: null,
        twitter: null,
        url: '007.com',
        bio: null,
        features: null,
      }]
    },
    mutations: {
      SetMatchForm(state, matchType) {
        if (state.activeMatchForm != matchType) {
          state.activeMatchForm = matchType
          state.activeMatch = {}
          state.newForm = true
        } else {
          state.activeMatchForm = ''
          state.newForm = false
        }
      },
      AddMatch(state, match) {
        if(state.newForm) {
          state.matches.push(match)
        } else {
          let currentMatch = state.matches.find(e => e == match)
        }
      },
      SetMatch(state, match) {
        state.newForm = false
        if (state.activeMatch != match) {
          state.activeMatch = match
          state.activeMatchForm = match.type
        } else {
          state.activeMatch = {}
          state.activeMatchForm = ''
        }
      }
    }
  })
}

export default createStore
