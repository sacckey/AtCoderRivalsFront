<template>
  <b-row>
    <Sidebar />
    <div v-if="atcoderUser" class="col-lg-8">
      <div class="profile">
        <a :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`" target="_blank"><img :alt="atcoderUser.atcoder_id" class="icon" :src="atcoderUser.image_url" width="100" height="100"></a>
        <div class="info">
          <h1>
            <a :class="ratingColor(atcoderUser.rating)" :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`" target="_blank">{{ atcoderUser.atcoder_id }}</a>
          </h1>
          <table>
            <tbody>
              <tr><th>Rating</th><td><span :class="ratingColor(atcoderUser.rating)">{{ atcoderUser.rating }}</span></td></tr>
              <tr><th>AC</th><td>{{ atcoderUser.accepted_count }}</td></tr>
            </tbody>
          </table>
        </div>
        <FollowButton :atcoder-user="atcoderUser" />
      </div>
      <Feeds :base-url="`v1/atcoder_users/${atcoderUser.atcoder_id}`" />
    </div>
  </b-row>
</template>

<script>
export default {
  middleware: 'auth',
  async fetch () {
    const atcoderId = this.$route.params.atcoder_id
    try {
      const atcoderUser = await this.$axios.$get(`v1/atcoder_users/${atcoderId}`)
      this.atcoderUser = atcoderUser
    } catch (err) {
      this.showErrorAlert(err)
    }
  },
  data () {
    return {
      atcoderUser: null
    }
  }
}
</script>

<style lang='scss' scoped>
.profile {
  height: 100px;
  margin-bottom: 20px;

  .info {
    margin-left: 120px;
    display: inline-block;

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
