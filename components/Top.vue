<template>
  <client-only>
    <Vue100vh>
      <b-jumbotron header="AtCoder Rivals" fluid>
        <div class="btns">
          <nuxt-link to="/about" class="btn btn-danger btn-lg">
            About
          </nuxt-link>
          <div class="btn btn-primary btn-lg" @click="login">
            <img src="twitter.svg" class="twitter-icon">
            Sign up with Twitter
          </div>
          <div class="btn btn-warning btn-lg" @click="sampleLogin">
            Try without signing up
          </div>
        </div>
      </b-jumbotron>
    </Vue100vh>
  </client-only>
</template>

<script>
import Vue100vh from 'vue-div-100vh'

export default {
  components: { Vue100vh },
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
        this.showErrorAlert(err)
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
        this.showErrorAlert(err)
        this.$store.dispatch('resetState')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.jumbotron {
  margin: 0;
  height: 100%;
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../assets/images/bg-masthead.jpg');
  background-position: center;
  background-size: cover;

  .container {
    position: relative;
    height: 100%;
    text-align: center;
    color: white;
    h1 {
      position: absolute;
      top: 60%;
      transform: translateY(-150%);
      left: 0;
      right: 0;
      font-size: 90px;
      font-family: 'Quicksand', sans-serif;
    }

    .btns {
      position: absolute;
      bottom: 30%;
      transform: translateY(80%);
      left: 0;
      right: 0;

      .twitter-icon {
        position: relative;
        bottom: 2px;
        right: 4px;
      }
      .btn {
        width: 250px;
      }
      .btn-danger {
        display: block;
        margin: auto;
        border-radius: 23px;
        margin-bottom: 30px;
      }
      .btn-primary, .btn-warning {
        margin: 0px 10px;
        margin-top: 20px;
      }
    }
  }
}
</style>
