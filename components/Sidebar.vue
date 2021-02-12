<template>
  <aside class="col-lg-4 sidebar">
    <div class='user_info'>
      <a href="/users/1"><img alt="Example User" class="icon" :src="photoURL" width="80" height="80"></a>
      <div class='user_name'>
        <h1>Example User</h1>
        <span><a href="/users/1">view my profile</a></span>
        <span class="atid"> AtCoder ID: <a class="rate_green" href="https://atcoder.jp/users/Yama24">Yama24</a></span>
      </div>
    </div>
    <div class="stats">
      <a href="/users/1/following">
        <strong id="following">0</strong>following
      </a>
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
  // ...mapState(["authUser"]),
    photoURL () {
      return this.$store.state.authUser?.photoURL
    },
  // isAuthenticated() {
  //   return this.$store.getters.isAuthenticated
  // }
  }
}
</script>

<style lang='scss'>
.user_name{
  height: 80px;
  // position: relative;
  padding-left: 90px;
}
.user_info{
  position: relative;
  h1 {
      font-size: 1.4em;
      text-align: left;
      letter-spacing: -1px;
      margin-bottom: 0px;
    }
  span {
    display: block;
  }
  .atid{
    position: absolute;
    bottom: 0;
  }
}
.stats {
  margin-top: 10px;
  a {
    float: left;
    color: gray;
    &:hover {
      text-decoration: none;
      color: blue;
    }
  }
  strong {
    display: block;
  }
}
.sidebar{
  margin-bottom: 20px;
}
</style>