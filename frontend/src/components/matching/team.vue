<template lang="html">
  <div>
    <div class="widget-subhead">
      <h2 class="widget-head">Team Member</h2>
      <font-awesome-icon @click="toggleHelpText()" :icon="['fal', 'question-circle']" class="help-icon" :class="{ active : helpTextActive}"/>
    </div>
    <p class="help-text" v-if="helpTextActive">Add information to get insight about how each of your contacts relate to each member of your team: topics (key concepts that match the contact to the team member), and a match score.</p>
    <float-label :label="'Name'" :inputValue="name">
      <input class="input" v-model="name">
    </float-label>
    <float-label :label="'Email'" :inputValue="email">
      <input class="input" v-model="email">
    </float-label>
    <float-label :label="'LinkedIn'" :inputValue="linkedIn">
      <input class="input" v-model="linkedIn">
    </float-label>
    <float-label :label="'Facebook'" :inputValue="facebook">
      <input class="input" v-model="facebook">
    </float-label>
    <float-label :label="'Twitter'" :inputValue="twitter">
      <input class="input" v-model="twitter">
    </float-label>
    <float-label v-for="(currentUrl, index) in urls" :label="'URL'" :inputValue="url" :key="index">
      <input class="input" v-model="currentUrl.url" @change.once="addUrl()">
    </float-label>
    <float-label :label="'Bio'" :inputValue="bio">
      <textarea class="textarea" v-model="bio"></textarea>
    </float-label>
    <float-label :label="'Features'" :inputValue="features">
      <textarea class="textarea" v-model="features"></textarea>
    </float-label>
    <button class="solid-button" @click="addMatch()">add new team member</button>
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
      type: 'teamMember',
      name: null,
      email: null,
      linkedIn: null,
      facebook: null,
      twitter: null,
      urls: [],
      bio: null,
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
        email:this.email,
        linkedIn: this.linkedIn,
        facebook: this.facebook,
        twitter: this.twitter,
        urls: this.urls,
        bio: this.bio,
        features: this.features,
      }
      this.$store.commit('AddMatch', match)
      this.name = null
      this.email = null
      this.linkedIn = null
      this.facebook = null
      this.twitter = null
      this.urls = null
      this.bio = null
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
      this.email = currentMatch.email
      this.linkedIn = currentMatch.linkedIn
      this.facebook = currentMatch.facebook
      this.twitter = currentMatch.twitter
      this.urls = currentMatch.urls
      this.bio = currentMatch.bio
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
