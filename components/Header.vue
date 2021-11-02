<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to="/">
          AtCoder Rivals
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">
              Home
            </b-nav-item>
            <b-nav-item v-if="$store.getters.isAdmin" to="/hasura">
              Hasura
            </b-nav-item>
            <b-nav-item to="/about">
              About
            </b-nav-item>
            <b-nav-item v-if="$store.getters.isLoggedIn" to="/search">
              Search
            </b-nav-item>
            <b-nav-item v-if="$store.getters.isAdmin" to="/admin">
              Admin
            </b-nav-item>
            <b-nav-item-dropdown v-if="$store.getters.isLoggedIn" text="Account" right>
              <b-dropdown-item :to="`/atcoder_users/${authUser.atcoderId}`">
                Profile
              </b-dropdown-item>
              <b-dropdown-item to="/edit">
                Settings
              </b-dropdown-item>
              <b-dropdown-item @click="logout">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
        this.$router.go()
      } catch (err) {
        this.showErrorAlert(err)
      }
    }
  }
}
</script>

<style lang='scss'>
.navbar{
  margin-bottom: 20px;
}
</style>
