<template>
  <Nuxt v-if="isTop" />
  <div v-else>
    <Header />
    <b-container>
      <Alert v-if="alert" />
      <Nuxt />
      <Footer />
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    isTop () {
      return !this.$store.getters.isLoggedIn && this.$route.path === '/'
    }
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
}

.btn-warning {
  color :white;
  &:hover, &:not(:disabled):not(.disabled):active {
    color: white;
  }
}

.btn-outline-primary {
  &:hover, &:not(:disabled):not(.disabled):active {
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
