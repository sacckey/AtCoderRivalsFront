<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand to='/'>AtCoder Rivals</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to='/'>Home</b-nav-item>
            <b-nav-item to='/about'>About</b-nav-item>
            <b-nav-item to='/search' v-if="authUser">Search</b-nav-item>
            <b-nav-item-dropdown text='Account' v-if="authUser" right>
              <b-dropdown-item :to="`/atcoder_users/${authUser.atcoderId}`">Profile</b-dropdown-item>
              <b-dropdown-item :to="`/users/${authUser.userId}/edit`">Settings</b-dropdown-item>
              <b-dropdown-item @click.stop="logout">Sign Out</b-dropdown-item>
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
    logout({ redirect }) {
      this.$fire.auth.signOut()
        .then(() => {
          // ログアウト成功時
          window.alert('ログアウトしました')
          this.$router.go()
        })
        .catch((error) => {
          // ログアウト失敗時
          window.alert('ログアウトに失敗しました')
          console.error(error)
        })
    },
  }
}
</script>

<style lang='scss'>
.navbar{
  margin-bottom: 20px;
}
</style>
