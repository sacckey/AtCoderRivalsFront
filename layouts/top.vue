<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='scss'>

// h1 {
//     font-size: 1.4em;
//     text-align: left;
//     letter-spacing: -1px;
//     margin-bottom: 0px;
//   }

.icon{
  position: absolute;
}

// btn-xs
.btn-xs, .btn-group-xs > .btn {
    padding: 1px 5px;
    font-size: 12px;
    line-height: normal;
    border-radius: 3px;
    font-weight: 500;
    width: 35px;
    color: white;
}

// btn-warning
.btn-warning {
  color: white;
}
.btn-warning:hover {
  color: white;
}

// rate_color
.rate_gray{
  color: gray;
}
.rate_brown{
  color: #804000;
}
.rate_green{
  color: green;
}
.rate_cyan{
  color: #00C0C0;
}
.rate_blue{
  color: blue;
}
.rate_yellow{
  color: #C0C000;
}
.rate_orange{
  color: #FF8000;
}
.rate_red{
  color: red;
}
</style>
