<template>
  <div class="jumbotron jumbotron-fluid jumbotron-extend">
    <div class="container-fluid jumbotron-container">
      <Alert v-if="alert" />
      <div class="acr">
        <h1>AtCoder Rivals</h1>
      </div>
      <div class="btns">
        <nuxt-link to="/about" class="btn btn-danger btn-lg">
          About
        </nuxt-link>
        <div class="btn btn-primary btn-lg" @click="login">
          <b-icon-twitter /> Sign up with Twitter
        </div>
        <div class="btn btn-warning btn-lg" @click="sampleLogin">
          Try without signing up
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconTwitter } from 'bootstrap-vue'
export default {
  components: {
    BIconTwitter
  },
  methods: {
    async login () {
      try {
        const provider = new this.$fireModule.auth.TwitterAuthProvider()
        const result = await this.$fire.auth.signInWithPopup(provider)
        const token = await result.user.getIdToken()
        this.$store.dispatch('setToken', token)
        const authUser = await this.$axios.$post('v1/sessions')
        this.$store.dispatch('setUser', authUser)

        if (authUser.auth_user.is_first_login) {
          this.showAlert('Please update your AtCoder ID', 30, 'success')
          this.$router.push('/edit')
          return
        }

        this.$router.push('/')
      } catch (err) {
        this.showErrorAlert('ログインに失敗しました')
        console.error(err)
        this.$store.dispatch('resetState')
      }
    },
    async sampleLogin () {
      try {
        const authUser = await this.$axios.$post('v1/sessions/sample_login')
        this.$store.dispatch('setUser', authUser)
        this.$store.dispatch('setToken', authUser.auth_user.token)

        if (authUser.auth_user.is_first_login) {
          this.showAlert('Please update your AtCoder ID', 30, 'success')
          this.$router.push('/edit')
          return
        }

        this.$router.push('/')
      } catch (err) {
        this.showErrorAlert('ログインに失敗しました')
        console.error(err)
        this.$store.dispatch('resetState')
      }
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
  .btn-warning {
    color: white;
    &:hover, &:not(:disabled):not(.disabled):active {
      color: white;
    }
  }
}
</style>
