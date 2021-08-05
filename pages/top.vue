<template>
  <div class="jumbotron jumbotron-fluid jumbotron-extend">
    <div class="container-fluid jumbotron-container">
      <div class="acr">
        <h1>AtCoder Rivals</h1>
      </div>
      <div class="btns">
        <nuxt-link to="/about" class="btn btn-danger btn-lg">About</nuxt-link>
        <div class="btn btn-primary btn-lg" @click="login">
          <b-icon-twitter /> Sign up with Twitter
        </div>
        <div class="btn btn-warning btn-lg" @click="sampleLogin">Try without signing up</div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon, BIconTwitter } from 'bootstrap-vue'
export default {
  layout: 'top',
  middleware({ store, redirect }) {
    if(store.getters['isLoggedIn']) {
      redirect('/');
    }
  },
  components: {
    BIcon,
    BIconTwitter,
  },
  methods: {
    login() {
      const provider = new this.$fireModule.auth.TwitterAuthProvider()
      // TODO: async/await, try/catchで書き直す
      this.$fire.auth.signInWithPopup(provider)
      .then((result) => {
        return result.user.getIdToken()
       })
       .then((token) => {
          this.$store.dispatch('setToken', token)
          return this.$axios.$post(`v1/sessions`)
       })
       .then((authUser) => {
        this.$store.dispatch('setUser', authUser)

        // ログイン成功時の処理
        window.alert('ログインしました')
        this.$router.push('/')
       })
       .catch((error) => {
         // ログイン失敗時の処理
         window.alert('ログインに失敗しました')
         console.error(error)
         this.$store.dispatch('resetState')
       })
    },
    sampleLogin() {
      // TODO: async/await, try/catchで書き直す
      return this.$axios.$post('v1/sessions/sample_login')
      .then((authUser) => {
        this.$store.dispatch('setUser', authUser)
        this.$store.dispatch('setToken', authUser.auth_user.token)

        // ログイン成功時の処理
        window.alert('ログインしました')
        this.$router.push('/')
      })
      .catch((error) => {
        // ログイン失敗時の処理
        window.alert('ログインに失敗しました')
        console.error(error)
        this.$store.dispatch('resetState')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.bi-twitter  {
  margin-right: 5px;
}

.jumbotron {
  margin: 0;
}

.jumbotron-extend {
  position: relative;
  height: 100vh;
  min-height: 300px;
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../assets/images/bg-masthead.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;

  .jumbotron-container {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
  }
  .acr{
    margin-top: 140px;
    h1{
      font-size: 95px;
    }
  }
  .btn {
    width: 250px;
    color: white;
    &:hover {
      color: white;
    }
  }
  .btn-danger {
    display: block;
    margin: auto;
    border-radius:23px;
    margin-top: 120px;
    margin-bottom: 30px;
  }
  .btn-primary, .btn-warning{
    margin: 0px 10px;
    margin-top: 20px;
  }
}
</style>
