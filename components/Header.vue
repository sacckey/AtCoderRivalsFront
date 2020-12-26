<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href='/'>AtCoder Rivals</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href='/'>Home</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item href='/search'>Search</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item href='/about'>About</b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown text='Account' right>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="/users/1/edit">Settings</b-dropdown-item>
              <b-dropdown-item href="/" v-on:click="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import { firebase } from '~/plugins/firebase'
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setUser']),
    // signout() {
    //   firebase.auth().signOut()
    //     .then(() => {
    //       this.setUser(null)
    //       // window.alert('Logged out')
    //     })
    //     .catch((e) => {
    //       // window.alert('ログアウトに失敗しました')
    //       console.log(e)
    //     })
    // },
    ...mapActions("auth", ["logout"])
  }
}
</script>

<style lang='scss'>
.navbar{
  margin-bottom: 20px;
}
</style>