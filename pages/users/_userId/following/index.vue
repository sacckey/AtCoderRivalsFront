<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <h3>Following</h3>
      <ul class="followings">
        <li
          v-for="user in following"
          :key="user.atcoder_id"
        >
          <div class='following'>
            <a :href="`https://atcoder.jp/users/${user.atcoder_id}`"><img :alt="user.atcoder_id" class="icon" :src="user.image_url" width="50" height="50"></a>
            <div class='follow-container'>
              <a class="atcoder_id" :href="`https://atcoder.jp/users/${user.atcoder_id}`">{{ user.atcoder_id }}</a>
              <div id="follow_form_2" class="follow_form">
                <form class="edit_relationship" id="edit_relationship_4" action="/relationships/4" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="gWIsoImJYjqMXRM0/f/pqjbL3KNolzEB48cftbi8TAEwSuaf0SSPg71+iv6xXzJBZlkdwLCDPsCzzmI1RhR6+A==">
                  <input type="submit" name="commit" value="Following" class="btn btn-primary" data-disable-with="Following">
                </form>
              </div>
            </div>
          </div>
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
  export default {
    data() {
      return {
        perPage: 30,
        currentPage: 1,
        following: [],
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
.atcoder_id {
  position: absolute;
}

.following {
  height: 50px;
}

.follow_form {
  padding-left: 150px;
  padding-top: 7px;
}

.follow-container {
  padding-left: 60px;
}

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