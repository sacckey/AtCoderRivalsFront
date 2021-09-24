import Vue from 'vue'

Vue.mixin({
  computed: {
    authUser () {
      return this.$store.state.authUser
    },
    alert () {
      return this.$store.state.alert
    }
  },
  methods: {
    ratingColor (rating) {
      if (rating <= 399) {
        return 'rating_gray'
      } else if (rating <= 799) {
        return 'rating_brown'
      } else if (rating <= 1199) {
        return 'rating_green'
      } else if (rating <= 1599) {
        return 'rating_cyan'
      } else if (rating <= 1999) {
        return 'rating_blue'
      } else if (rating <= 2399) {
        return 'rating_yellow'
      } else if (rating <= 2799) {
        return 'rating_orange'
      } else {
        return 'rating_red'
      }
    },
    showAlert (message, dismissCount, variant) {
      this.$store.dispatch('setAlert', { message, dismissCount, variant })
    },
    showErrorAlert (err) {
      const message = err?.response?.data?.message || 'error!'
      this.showAlert(message, 3, 'danger')
    },
    hideAlert () {
      this.$store.dispatch('resetAlert')
    }
  }
})
