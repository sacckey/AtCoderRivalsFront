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
          <Following :atcoderUser="atcoderUser" />
        </li>
        <b-pagination
          v-model="currentPage"
          :total-rows="authUser.followingCount"
          :per-page="perPage"
          @change="handlePageChange"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>
      </ul>
    </div>
  </b-row>
</template>

<script>
  import Following from '~/components/Following.vue'

  export default {
    middleware: 'auth',
    data() {
      return {
        perPage: 30,
        currentPage: 1,
        following: []
      }
    },
    async fetch() {
      await this.getFollowing(this.currentPage)
    },
    methods: {
      handlePageChange(page) {
        this.getFollowing(page)
      },
      async getFollowing(page) {
        const data = await this.$axios.$get(`v1/users/${this.authUser.userId}/following?page=${page}`).catch((err) => console.error(err))
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
