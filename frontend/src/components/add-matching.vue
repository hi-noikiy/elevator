<template lang="html">
  <div class="widget">
    <div class="widget-header">
      <h2 class="widget-head"><span class="step">2</span>Add a match score for {{selectedMatch}}</h2>
    </div>
    <div class="container-grid-3 match-selection-container">
      <button class="pill-button"
      @click="setMatchForm('industry')"
      :class="{active: activeMatch == 'industry'}">
        Industry</button>
      <button class="pill-button"
      @click="setMatchForm('company')"
      :class="{active: activeMatch == 'company'}">
        Company</button>
      <button class="pill-button"
      @click="setMatchForm('teamMember')"
      :class="{active: activeMatch == 'teamMember'}">
        Team Member</button>
      <button class="pill-button"
      @click="setMatchForm('product')"
      :class="{active: activeMatch == 'product'}">
        Product</button>
      <button class="pill-button"
      @click="setMatchForm('service')"
      :class="{active: activeMatch == 'service'}">
        Service</button>
      <button class="pill-button"
        @click="setMatchForm('offer')"
        :class="{active: activeMatch == 'offer'}">
        Offer</button>
    </div>
    <div>
      <industry v-if="activeMatch == 'industry'"/>
      <company v-if="activeMatch == 'company'"/>
      <team-member v-if="activeMatch == 'teamMember'"/>
      <product v-if="activeMatch == 'product'"/>
      <service v-if="activeMatch == 'service'"/>
      <offer v-if="activeMatch == 'offer'"/>
    </div>
  </div>
</template>

<script>
import Industry from './matching/industry'
import Company from './matching/company'
import TeamMember from './matching/team'
import Product from './matching/product'
import Service from './matching/service'
import Offer from './matching/offer'
import floatLabel from './shared/float-label'

export default {
  components: {
    floatLabel,
    Industry,
    Company,
    TeamMember,
    Product,
    Service,
    Offer,
  },
  computed: {
    activeMatch() {
      return this.$store.state.activeMatchForm
    },
    selectedMatch() {
      switch (this.$store.state.activeMatchForm) {
        case 'industry':
          return 'an industry'
          break;
        case 'company':
          return 'a company'
          break;
        case 'teamMember':
          return 'a team member'
          break;
        case 'product':
          return 'a product'
          break;
        case 'service':
          return 'a service'
          break;
        case 'offer':
          return 'an offer'
          break;
        default:
          return 'a...'
      }
    }
  },
  methods: {
    setMatchForm(matchType) {
      this.$store.commit('SetMatchForm', matchType)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
