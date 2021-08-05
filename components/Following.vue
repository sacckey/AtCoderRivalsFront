<template>
  <div class='following'>
    <a :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`"><img :alt="atcoderUser.atcoder_id" class="icon" :src="atcoderUser.image_url" width="50" height="50"></a>
    <div class='follow-container'>
      <a class="atcoder_id" :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`">{{ atcoderUser.atcoder_id }}</a>
      <div class="follow_form">
        <div v-if="isFollowing" @click="unfollow(atcoderUser)" class="btn btn-primary">
          Following
        </div>
        <div v-else @click="follow(atcoderUser)" class="btn btn-outline-primary">
          Follow
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      atcoderUser: Object,
      initialFollowingState: Boolean
    },
    data() {
      return {
        isFollowing: this.initialFollowingState
      }
    },
    methods: {
      async follow(atcoderUser) {
        try {
          await this.$axios.$post(`v1/atcoder_users/${atcoderUser.id}/follow`)
          this.$store.dispatch('incrementFollowingCount', this.authUser)
          this.isFollowing = true
        } catch (err) {
          console.error('error!!!!!!!!!!!')
        }
      },
      async unfollow(atcoderUser) {
        try {
          await this.$axios.$delete(`v1/atcoder_users/${atcoderUser.id}/unfollow`)
          this.$store.dispatch('decrementFollowingCount', this.authUser)
          this.isFollowing = false
        } catch (err) {
          console.error('error!!!!!!!!!!!')
        }
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
</style>
