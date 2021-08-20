<template>
  <b-alert
    :show="alert.dismissCount"
    dismissible
    fade
    :variant="alert.variant"
    @dismissed="hideAlert()"
  >
    {{ alert.message }}
  </b-alert>
</template>
