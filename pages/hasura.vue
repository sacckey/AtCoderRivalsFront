<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <h3>HASURA</h3>
      <div class="btn btn-warning btn-lg" @click="fetchCustomClaims">
        fetchCustomClaims
      </div>

      <div class="btn btn-success btn-lg" @click="fetchUserInfo">
        fetchUserInfo
      </div>

      <div>
        <ul class="followings">
          <li
            v-for="user in users"
            :key="user.id"
          >
            {{ user }}
          </li>
        </ul>
      </div>
    </div>
  </b-row>
</template>

<script>
export default {
  middleware: 'admin',
  data () {
    return {
      users: []
    }
  },
  methods: {
    async fetchCustomClaims () {
      try {
        const functions = this.$fire.functions
        if (process.env.NODE_ENV !== 'production') {
          functions.useFunctionsEmulator('http://localhost:5000')
        }

        const func = functions.httpsCallable('setCustomClaims')
        await func({ name: 'hoge' })

        const token = await this.$fire.auth.currentUser.getIdToken(true)
        this.$store.dispatch('setToken', token)
      } catch (err) {
        this.showErrorAlert(err)
      }
    },
    async fetchUserInfo () {
      try {
        const query = `query {
          users {
            id
          }
        }`

        const res = await this.$axios.$post('http://localhost:8080/v1/graphql', { query })

        this.users = res.data.users
      } catch (err) {
        this.showErrorAlert(err)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.followings {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    border-top: 1px solid #e8e8e8;
    padding: 15px 0;
  }
}
</style>
