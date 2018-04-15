<template lang="html">
  <div>
    <div class="widget-subhead">
      <h2 class="widget-head">Company</h2>
      <font-awesome-icon @click="toggleHelpText()" :icon="['fal', 'question-circle']" class="help-icon" :class="{ active : helpTextActive}"/>
    </div>
    <p class="help-text" v-if="helpTextActive">Add information to get insight about how each of your contacts relate to your (or your competitor's) company: tags (leader, employee, vendor, prospect), topics (key concepts that match the contact to the company), and a match score.</p>
    <float-label :label="'Company Name'" :inputValue="name">
      <input class="input" v-model="name">
    </float-label>
    <float-label v-for="(currentUrl, index) in urls" :label="'URL'" :inputValue="url" :key="index">
      <input class="input" v-model="currentUrl.url" @change.once="addUrl()">
    </float-label>
    <float-label :label="'Email Domain'" :inputValue="emailDomain">
      <input class="input" v-model="emailDomain">
    </float-label>
    <float-label :label="'LinkedIn'" :inputValue="linkedIn">
      <input class="input" v-model="linkedIn">
    </float-label>
    <float-label :label="'Additional Text'" :inputValue="additionalText">
      <textarea class="textarea" v-model="additionalText"></textarea>
    </float-label>
    <float-label :label="'Features'" :inputValue="features">
      <textarea class="textarea" v-model="features"></textarea>
    </float-label>
    <button class="solid-button" @click="addMatch()">add new company</button>
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
      type: 'company',
      name: null,
      urls: [],
      emailDomain: null,
      linkedIn: null,
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
        emailDomain: this.emailDomain,
        linkedIn: this.linkedIn,
        additionalText: this.additionalText,
        features: this.features,
      }
      this.$store.commit('AddMatch', match)
      this.name = null
      this.urls = null
      this.emailDomain = null
      this.linkedIn = null
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
    if(this.$store.state.activeMatch.type == 'company'){
      this.name = currentMatch.name
      this.urls = currentMatch.urls
      this.emailDomain = currentMatch.emailDomain
      this.linkedIn = currentMatch.linkedIn
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
