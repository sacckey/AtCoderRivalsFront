<template>
  <div>
    <Header />
    <b-container>
      <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      >
      {{ message }}
      </b-alert>
      <Nuxt />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      message: '',
      dismissSecs: 3,
      dismissCountDown: 0
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert(message) {
      this.message = message
      this.dismissCountDown = this.dismissSecs
    }
  },
  created() {
    this.$nuxt.$on('show-alert', message => {
      this.showAlert(message)
    })
  }
}
</script>

<style lang='scss'>
@import '~bootstrap/scss/bootstrap';

.icon{
  position: absolute;
}

// btn-xs
.btn-xs {
  padding: 1px 5px;
  font-size: 12px;
  line-height: normal;
  border-radius: 3px;
  font-weight: 500;
  width: 35px;
  color: white;
  &:hover {
    color: white;
  }
}

.btn-outline-primary {
  &:hover {
    color: var(--primary);
    border-color: #0062cc;
    background: white;
  }
}

.btn-ac {
  @extend .btn-success;
}

.btn-ce, .btn-mle, .btn-tle, .btn-re, .btn-ole, .btn-ie, .btn-wa, .btn-wj, .btn-wr {
  @extend .btn-warning;
}

// rating_color
.rating_gray{
  color: gray;
}
.rating_brown{
  color: #804000;
}
.rating_green{
  color: green;
}
.rating_cyan{
  color: #00C0C0;
}
.rating_blue{
  color: blue;
}
.rating_yellow{
  color: #C0C000;
}
.rating_orange{
  color: #FF8000;
}
.rating_red{
  color: red;
}

.validation_error_message {
  color: red;
}
</style>
