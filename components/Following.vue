<template>
  <div class='following'>
    <nuxt-link :to="`/atcoder_users/${atcoderUser.atcoder_id}`"><img :alt="atcoderUser.atcoder_id" class="icon" :src="atcoderUser.image_url" width="50" height="50"></nuxt-link>
    <div class='follow-container'>
      <nuxt-link class="atcoder_id" :to="`/atcoder_users/${atcoderUser.atcoder_id}`">{{ atcoderUser.atcoder_id }}</nuxt-link>
      <FollowButton :atcoderUser="atcoderUser" />
    </div>
  </div>
</template>

<script>
import FollowButton from '~/components/FollowButton.vue'

  export default {
    props: {
      atcoderUser: Object
    },
  }
</script>

<style lang='scss' scoped>
.atcoder_id {
  position: absolute;
}

.following {
  height: 50px;
}

.follow-container {
  padding-left: 60px;
}
</style>
