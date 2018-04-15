<template lang="html">
  <div class="widget">
    <div class="container-grid-5">
      <div class="avatar" v-for="(match, index) in industry" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
      <div class="avatar" v-for="(match, index) in company" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
      <div class="avatar" v-for="(match, index) in team" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
      <div class="avatar" v-for="(match, index) in product" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
      <div class="avatar" v-for="(match, index) in service" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
      <div class="avatar" v-for="(match, index) in offer" :key="index" @click="setMatchForm(match)" :class="match.type">
        <span class="avatar-initials">{{match.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setMatchForm(match) {
      this.$store.commit('SetMatch', match)
    }
  },
  computed: {
    industry () {
      return this.$store.state.matches.filter(match => match.type == 'industry')
    },
    company() {
      return this.$store.state.matches.filter(match => match.type == 'company')
    },
    team() {
      return this.$store.state.matches.filter(match => match.type == 'teamMember')
    },
    product() {
      return this.$store.state.matches.filter(match => match.type == 'product')
    },
    service() {
      return this.$store.state.matches.filter(match => match.type == 'service')
    },
    offer() {
      return this.$store.state.matches.filter(match => match.type == 'offer')
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
