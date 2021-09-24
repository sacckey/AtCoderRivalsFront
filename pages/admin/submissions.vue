<template>
  <div>
    <Submissions :submissions="submissions" />
    <infinite-loading @infinite="infiniteHandler" />
  </div>
</template>

<script>
import Submissions from '~/components/Submissions.vue'

export default {
  middleware: 'admin',
  components: {
    Submissions
  },
  data () {
    return {
      submissions: [],
      page: 1
    }
  },
  methods: {
    async infiniteHandler ($state) {
      try {
        const data = await this.$axios.$get(`v1/admin/submissions?page=${this.page}`)
        if (data.submissions.length) {
          this.page += 1
          this.submissions.push(...data.submissions)
          $state.loaded()
        } else {
          $state.complete()
        }
      } catch (err) {
        this.showErrorAlert(err)
      }
    }
  }
}
</script>

<style lang='scss'>
.feeds {
  list-style: none;
  padding: 0;
  li {
    border-top: 1px solid #e8e8e8;
    padding: 15px 0;
  }

  .submission {
    padding-left: 60px;
  }

  .feed_footer {
    color: gray;
    .timestamp {
      margin-left: 3px;
    }
  }
}
</style>
