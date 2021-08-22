<template>
  <b-alert
    :show="alert.dismissCount"
    dismissible
    fade
    :variant="alert.variant"
    @dismissed="hideAlert()"
    @dismiss-count-down="countDownChanged"
  >
    {{ alert.message }}
  </b-alert>
</template>

<script>
export default {
  methods: {
    countDownChanged (dismissCountDown) {
      this.$store.dispatch('updateAlertDismissCount', dismissCountDown)
    }
  }
}
</script>
