<template>
  <div>
    <div class="user_search">
      <label for="atcoder_id">AtCoder ID</label>
      <input id="atcoder_id" v-model="atcoderId" class="form-control" type="text" @keydown.enter="search">
      <button type="button" class="btn btn-primary btn-search" :disabled="validationErrorMessage.length > 0" @click="search">
        Search
      </button>

      <span class="validation_error_message">{{ validationErrorMessage }}</span>
    </div>

    <!-- <Following v-if="atcoderUser" :atcoder-user="atcoderUser" /> -->
    <Component :is="componentName" v-if="atcoderUser" :atcoder-user="atcoderUser" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      atcoderId: 'chokudai',
      atcoderUser: null
    }
  },
  computed: {
    validationErrorMessage () {
      if (this.atcoderId.length < 3 || this.atcoderId.length > 16 || this.atcoderId.match(/[^A-Za-z0-9_]+/)) {
        return 'フォーマットが正しくありません'
      }
      return ''
    },
    componentName () {
      const routeName = this.$route.name

      if (routeName === 'search') {
        return 'Following'
      }

      return ''
    }
  },
  methods: {
    async search (event) {
      if (event.isComposing || this.validationErrorMessage.length > 0) { return }

      try {
        const atcoderUser = await this.$axios.$get(`v1/atcoder_users/${this.atcoderId}`)
        this.atcoderUser = atcoderUser
      } catch (err) {
        const errorMessage = err.response.data.message
        this.showErrorAlert(errorMessage)
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
