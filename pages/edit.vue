<template>
  <div class="update-profile-container">
    <h1>Update your profile</h1>
    <div class="update-profile-form">
      <label for="atcoder_user_atcoder_id">AtCoder ID</label>
      <input id="atcoder_user_atcoder_id" v-model="atcoderId" class="form-control" type="text" @keydown.enter="save">
      <button type="button" class="btn btn-primary" :disabled="validationErrorMessage.length > 0" @click="save">
        Save changes
      </button>

      <span class="validation_error_message">{{ validationErrorMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      atcoderId: this.$store.state.authUser.atcoderId
    }
  },
  computed: {
    validationErrorMessage () {
      if (this.atcoderId.length < 3 || this.atcoderId.length > 16 || this.atcoderId.match(/[^A-Za-z0-9_]+/)) {
        return 'フォーマットが正しくありません'
      }
      return ''
    }
  },
  methods: {
    async save (event) {
      if (event.isComposing || this.validationErrorMessage.length > 0) { return }

      const body = { atcoder_id: this.atcoderId }
      try {
        const updatedAuthUser = await this.$axios.$patch(`v1/users/${this.authUser.userId}`, body)
        this.$store.dispatch('setUser', updatedAuthUser)

        this.showAlert('AtCoder ID updated', 3, 'success')
        this.$router.push(`/atcoder_users/${this.authUser.atcoderId}`)
      } catch (err) {
        const errorMessage = err.response.data.message
        this.showErrorAlert(errorMessage)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  h1{
    text-align: center;
  }
  .update-profile-container{
    text-align: center;
  }
  .update-profile-form{
    width: 70%;
    display: inline-block;
  }
  .edit_atcoder_user {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  input.form-control{
    width: 100%;
  }

  label {
    margin-bottom: 5px;
    font-weight: 700;
    float: left;
  }

  .btn{
    margin-top: 10px;
    width: 100%;
  }
</style>
