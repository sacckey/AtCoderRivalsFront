<template>
  <div>
    <h1>Nuxt Mountains</h1>
    {{ info }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: [],
        info: 'test'
      }
    },
    async fetch() {
      this.info = await fetch(
        'http://localhost:3000/api/v1/users/1/atcoder_user',
        {
          headers: {
            'Authorization': 'Bearer ' + this.idToken
          }
        }
      ).then(res => res.json())
      .then(body => body.atcoder_user)
    },
    computed: {
      idToken() {
        return this.$store.state.authUser?.token
      }
    }
  }
</script>

<style lang='scss' scoped>
  h1{
    text-align: center;
  }
</style>