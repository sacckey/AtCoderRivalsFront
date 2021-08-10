<template>
  <div class="follow-btn">
    <div v-if="isFollowing" @click="unfollow(atcoderUser)" class="btn btn-primary">
      Following
    </div>
    <div v-else @click="follow(atcoderUser)" class="btn btn-outline-primary">
      Follow
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      atcoderUser: Object
    },
    data() {
      return {
        isFollowing: this.atcoderUser.is_following
      }
    },
    watch: {
      atcoderUser: function(newAtcoderUser){
        this.isFollowing = newAtcoderUser.is_following
      }
    },
    methods: {
      async follow(atcoderUser) {
        try {
          await this.$axios.$post(`v1/atcoder_users/${atcoderUser.atcoder_id}/follow`)
          this.$store.dispatch('incrementFollowingCount', this.authUser)
          this.isFollowing = true
        } catch (err) {
          console.error('error!!!!!!!!!!!')
        }
      },
      async unfollow(atcoderUser) {
        try {
          await this.$axios.$delete(`v1/atcoder_users/${atcoderUser.atcoder_id}/unfollow`)
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
.follow-btn {
  padding-left: 150px;
  display: inline-block;
}
</style>
