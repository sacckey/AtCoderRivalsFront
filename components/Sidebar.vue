<template>
  <aside v-if="authUser" class="col-lg-4 sidebar">
    <div class="user_info">
      <nuxt-link :to="`/atcoder_users/${authUser.atcoderId}`">
        <img :alt="authUser.displayName" class="icon" :src="authUser.twitterPhotoURL" width="80" height="80">
      </nuxt-link>
      <div class="user_name">
        <h1>{{ authUser.displayName }}</h1>
        <span><nuxt-link :to="`/atcoder_users/${authUser.atcoderId}`">view my profile</nuxt-link></span>
        <span class="atid"> AtCoder ID: <nuxt-link :class="ratingColor(authUser.rating)" :to="`/atcoder_users/${authUser.atcoderId}`">{{ authUser.atcoderId }}</nuxt-link></span>
      </div>
    </div>
    <div class="stats">
      <nuxt-link to="/following">
        <strong id="following">{{ authUser.followingCount }}</strong>following
      </nuxt-link>
    </div>
  </aside>
</template>

<style lang='scss' scoped>
.user_name{
  height: 80px;
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
