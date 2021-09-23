<template>
  <div class="update-profile-form">
    <nuxt-link :to="`/atcoder_users/${atcoderUser.atcoder_id}`">
      <img :alt="atcoderUser.atcoder_id" class="icon" :src="atcoderUser.image_url" width="50" height="50">
    </nuxt-link>
    <div class="update-profile-container">
      <nuxt-link class="atcoder_id" :to="`/atcoder_users/${atcoderUser.atcoder_id}`">
        {{ atcoderUser.atcoder_id }}
      </nuxt-link>
      <UpdateProfileButton :atcoder-user="atcoderUser" />
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
  }
}
</script>

<style lang='scss' scoped>
.atcoder_id {
  display: inline-block;
  width: 150px;
  vertical-align: top;
}

.update-profile-form {
  height: 50px;
}

.update-profile-container {
  padding-left: 60px;
}
</style>
