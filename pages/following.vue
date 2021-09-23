<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <h3>Following</h3>
      <ul class="followings">
        <li
          v-for="atcoderUser in following"
          :key="atcoderUser.atcoder_id"
        >
          <FollowForm :atcoder-user="atcoderUser" />
        </li>
        <b-pagination
          v-model="currentPage"
          :total-rows="authUser.followingCount"
          :per-page="perPage"
          @change="handlePageChange"
        />
      </ul>
    </div>
  </b-row>
</template>

<script>
export default {
  middleware: 'auth',
  async fetch () {
    await this.getFollowing(this.currentPage)
  },
  data () {
    return {
      perPage: 30,
      currentPage: 1,
      following: []
    }
  },
  methods: {
    handlePageChange (page) {
      this.getFollowing(page)
    },
    async getFollowing (page) {
      const data = await this.$axios.$get(`v1/users/${this.authUser.userId}/following?page=${page}`).catch(err => console.error(err))
      this.following = data.following
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
