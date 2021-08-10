<template>
  <b-row>
    <Sidebar />
    <div class="col-md-8">
      <h3>User Search</h3>
      <div class="user_search">
        <label for="atcoder_id">AtCoder ID</label>
        <input v-model="atcoderId" class="form-control" type="text" id="atcoder_id">
        <button @click="search" type="button" class="btn btn-primary btn-search" :disabled="validationErrorMessage.length > 0">Search</button>

        <span class="validation_error_message">{{ validationErrorMessage }}</span>
      </div>

      <Following v-if="atcoderUser" :atcoderUser="atcoderUser" />
    </div>
  </b-row>
</template>

<script>
import Following from '~/components/Following.vue'

export default {
  middleware: 'auth',
  data() {
    return {
      atcoderId: 'chokudai',
      atcoderUser: null
    }
  },
  computed: {
    validationErrorMessage() {
      if (this.atcoderId.length < 3 || this.atcoderId.length > 16 || this.atcoderId.match(/[^A-Za-z0-9]+/)){
        return 'フォーマットが正しくありません'
      }
      return ''
    }
  },
  methods: {
    async search() {
      try {
        const atcoderUser = await this.$axios.$get(`v1/atcoder_users/${this.atcoderId}`)
        this.atcoderUser = atcoderUser
      } catch (err) {
        console.error('error!!!!!!!!!!!')
        const errorMessage = err.response.data.message
        this.callShowAlert(errorMessage)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.user_search {
  margin-top: 30px;
  margin-bottom: 50px;
}

input#search{
  width: 100%;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}

.btn-search{
  margin-top: 10px;
  width: 100%;
}
</style>
