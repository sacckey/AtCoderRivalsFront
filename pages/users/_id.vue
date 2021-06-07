<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <div class="profile">
        <a :href="`https://atcoder.jp/users/${authUser.atcoder_id}`"><img :alt="authUser.displayName" class="icon" :src="authUser.atcoderPhotoURL" width="100" height="100"></a>
        <div class="info">
          <h1>
            <a :class="ratingColor(authUser.rating)" :href="`https://atcoder.jp/users/${authUser.atcoder_id}`">{{ authUser.atcoderId }}</a>
          </h1>
          <table>
            <tbody><tr><th>Rating</th><td><span :class="ratingColor(authUser.rating)">{{ authUser.rating }}</span></td></tr>
            <tr><th>AC</th><td>{{ authUser.acceptedCount }}</td></tr>
          </tbody></table>
        </div>
      </div>
      <Feeds :baseURL="`v1/users/${authUser.userId}/`"/>
    </div>
  </b-row>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Feeds from '~/components/Feeds.vue'

export default {
  components: {
    Sidebar,
    Feeds
  },
}
</script>

<style lang='scss' scoped>
.profile {
  height: 100px;
  margin-bottom: 20px;

  .info {
    margin-left: 120px;

    h1 {
      font-size: 1.4em;
      text-align: left;
      letter-spacing: -1px;
      margin-bottom: 0px;
    }
    table {
      margin-top: 28px;
      width: 100px;
    }
  }
}
</style>