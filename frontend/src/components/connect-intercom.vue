<template lang="html">
  <div class="widget">
    <div class="widget-header">
      <h2 class="widget-head"><span class="step">1</span>Connect to Intercom</h2>
    </div>
    <button v-if="!intercomStatus" class="outline-button" @click="connectIntercom">connect</button>
    <button v-if="intercomStatus" class="outline-button connected" @click="disconnectIntercom"><font-awesome-icon :icon="['fas', 'exclamation-circle']" class="warning-icon"/> disconnect from Intercom</button>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data: function() {
    return {
      intercomStatus: false,
    }
  },
  methods: {
    connectIntercom() {
      this.intercomStatus = true
      alert('This will allow the user to authenticate Elevator with Intercom.')
    },
    disconnectIntercom() {
      this.intercomStatus = false
    }
  },
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/variables.scss';

  .connected {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .2s ease-in, border-color .2s ease-in;
    background-color: $primary;
    color: $white;

    &:hover {
      border-color: $red;
      background-color: $red;
    }
  }

  .edit-intercome-connection {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;
  }

  .warning-icon {
    margin-right: .25rem;
  }
</style>
