<template lang="html">
  <div>
    <dash-head/>
    <div class="container dash-container-2 configuration">
      <section class="dash-2-left-section">
        <connect-intercome class="connect-intercom"/>
        <add-matching class="add-matching"/>
        <run-elevator class="run-elevator"/>
      </section>
      <section class="dash-2-right-section">
        <matches class="matches"/>
      </section>
    </div>
  </div>
</template>

<script>
import DashHead from '../components/shared/dash-head.vue'
import ConnectIntercome from '../components/connect-intercom.vue'
import AddMatching from '../components/add-matching.vue'
import RunElevator from '../components/run-elevator.vue'
import Matches from '../components/matches.vue'

export default {
  components: {
    DashHead,
    ConnectIntercome,
    AddMatching,
    RunElevator,
    Matches,
  },
  mounted: function() {
    let textareas = document.querySelectorAll('.textarea')
    textareas.forEach(function(e) {
      e.style.height = e.scrollHeight - 14 + "px"
      e.addEventListener('input', function() {
        e.style.height = e.scrollHeight - 4 + "px"
      })
    })
  }
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';
  @import '../assets/styles.scss';
</style>
