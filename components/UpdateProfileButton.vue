<template>
  <div class="update-profile-btn">
    <button type="button" class="btn btn-primary" @click="save">
      Save
    </button>
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
  methods: {
    async save () {
      const body = { atcoder_id: this.atcoderUser.atcoder_id }
      try {
        const updatedAuthUser = await this.$axios.$patch(`v1/users/${this.authUser.userId}`, body)
        this.$store.dispatch('setUser', updatedAuthUser)

        this.showAlert('AtCoder ID updated', 3, 'success')
        this.$router.push(`/atcoder_users/${this.authUser.atcoderId}`)
      } catch (err) {
        this.showErrorAlert(err)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.update-profile-btn {
  padding-left: 20px;
  display: inline-block;
}
</style>
