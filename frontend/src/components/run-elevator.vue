<template lang="html">
  <div class="widget">
    <div class="widget-header">
      <h2 class="widget-head"><span class="step">3</span>Enrich all users in Intercom</h2>
    </div>
    <button class="solid-button">call elevator</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      intercomStatus: false,
    }
  },
  methods: {
    connectIntercom() {
      this.intercomStatus = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/variables.scss';

  .connected {
    background-color: $primary;
    color: $white;
    cursor: default;
  }

  .edit-intercome-connection {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1rem 0;
  }
</style>
