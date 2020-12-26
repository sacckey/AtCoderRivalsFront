<template>
  <div>
    <Header />
    <b-container>
      <Nuxt />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
// import { mapActions } from "vuex";
import { firebase,getCurrentUser } from '~/plugins/firebase'

export default {
  components: {
    Header,
    Footer
  },
  // mounted () {
    // firebase.auth().onAuthStateChanged((user) => {
    //   // this.isWaiting = false
    //   if(user){
    //     this.setUser(user)
    //   }
    // })
    // this.getCurrentUser()
  // },
  methods: {
    // ...mapActions(['gotUser']),
    // getCurrentUser() {
    //   return new Promise((resolve) => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //       if(user){
    //         this.isWaiting = false
    //         this.setUser(user)
    //       }
    //       resolve()
    //     })
    //   })
    // },
    // async abcd() {
    //   await this.getCurrentUser()
    // }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  // async middleware({ redirect }) {
  //   console.log('=== middleware');
  //   const currentUser = await getCurrentUser();

  //   if (!currentUser) {
  //     redirect('/top');
  //   }
  // }
  // middleware: 'authenticated',
}
</script>

<style lang='scss'>
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
