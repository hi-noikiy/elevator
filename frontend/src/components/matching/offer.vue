<template lang="html">
  <div>
    <div class="widget-subhead">
      <h2 class="widget-head">Offer</h2>
      <font-awesome-icon @click="toggleHelpText()" :icon="['fal', 'question-circle']" class="help-icon" :class="{ active : helpTextActive}"/>
    </div>
    <p class="help-text" v-if="helpTextActive">Add information to get insight about how your contacts relate to your offer: topics (key concepts that match the contact to your offer, a match score, an adoption curve segment for the contact (innovator, early adopter, late adopter, laggard), a buyer's journey stage (unaware, aware, customer, repeat customer, advocate), and a lead priority score. </p>
    <float-label :label="'Name'" :inputValue="name">
      <input class="input" v-model="name">
    </float-label>
    <float-label v-for="(currentUrl, index) in urls" :label="'URL'" :inputValue="url" :key="index">
      <input class="input" v-model="currentUrl.url" @change.once="addUrl()">
    </float-label>
    <float-label :label="'Additional Text'" :inputValue="additionalText">
      <textarea class="textarea" v-model="additionalText"></textarea>
    </float-label>
    <float-label :label="'Features'" :inputValue="features">
      <textarea class="textarea" v-model="features"></textarea>
    </float-label>
    <button class="solid-button" @click="addMatch()">add new offer</button>
  </div>
</template>

<script>
import floatLabel from '../shared/float-label'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    floatLabel,
    FontAwesomeIcon
  },
  data: () => {
    return {
      type: 'offer',
      name: null,
      urls: [],
      additionalText: null,
      features: null,
      helpTextActive: false,
    }
  },
  methods: {
    toggleHelpText() {
      this.helpTextActive = !this.helpTextActive
    },
    addMatch () {
      let match = {
        type: this.type,
        name: this.name,
        urls: this.urls,
        additionalText: this.additionalText,
        features: this.features,
      }
      this.$store.commit('AddMatch', match)
      this.name = null
      this.urls = null
      this.additionalText = null
      this.features = null
      this.$store.commit('SetMatchForm', '')
    },
    addUrl() {
      this.urls.push({ url: '' });
    }
  },
  mounted() {
    this.addUrl()
    let currentMatch = this.$store.state.activeMatch
    if(this.$store.state.activeMatch.type == this.type){
      this.name = currentMatch.name
      this.urls = currentMatch.urls
      this.additionalText = currentMatch.additionalText
      this.features = currentMatch.features
    }
  }
}
</script>

<style lang="scss" scoped>
  .widget-head {
    margin-bottom: 0;
  }
</style>
