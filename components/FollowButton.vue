<template>
  <div class="follow-btn">
    <div v-if="isFollowing" class="btn btn-primary" @click="unfollow(atcoderUser)">
      Following
    </div>
    <div v-else class="btn btn-outline-primary" @click="follow(atcoderUser)">
      Follow
    </div>
  </div>
</template>

<script>
export default {
  props: {
    atcoderUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isFollowing: this.atcoderUser.is_following
    }
  },
  watch: {
    atcoderUser (newAtcoderUser) {
      this.isFollowing = newAtcoderUser.is_following
    }
  },
  methods: {
    async follow (atcoderUser) {
      try {
        await this.$axios.$post(`v1/atcoder_users/${atcoderUser.atcoder_id}/follow`)
        this.$store.dispatch('incrementFollowingCount')
        this.isFollowing = true
      } catch (err) {
        console.error('error!!!!!!!!!!!')
      }
    },
    async unfollow (atcoderUser) {
      try {
        await this.$axios.$delete(`v1/atcoder_users/${atcoderUser.atcoder_id}/unfollow`)
        this.$store.dispatch('decrementFollowingCount')
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
  padding-left: 20px;
  display: inline-block;
}
</style>
