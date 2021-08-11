<template>
  <client-only>
    <b-tabs content-class="mt-3" v-model="tabIndex">
      <Submissions :submissions="feeds.submissions" />
      <Contests :contests="feeds.contests" />
      <infinite-loading :identifier="tabIndex" @infinite="infiniteHandler"></infinite-loading>
    </b-tabs>
  </client-only>
</template>

<script>
import Submissions from '~/components/Submissions.vue'
import Contests from '~/components/Contests.vue'

const feedsTypes = ['submissions', 'contests']

export default {
  props: {
    baseURL: String
  },
  data() {
    return {
      feeds: {
        submissions: [],
        contests: []
      },
      pages: {
        submissions: 1,
        contests: 1,
      },
      tabIndex: 0,
    }
  },
  components: {
    Submissions,
    Contests
  },
  computed: {
    feedsType() {
      return feedsTypes[this.tabIndex]
    },
  },
  methods: {
    async infiniteHandler($state) {
      const feedsType = this.feedsType
      const page = this.pages[feedsType]
      const data = await this.$axios.$get(`${this.baseURL}/${feedsType}?page=${page}`).catch((err) => console.error(err))
      if (data[feedsType].length) {
        this.pages[feedsType] += 1
        this.feeds[feedsType].push(...data[feedsType])
        $state.loaded()
      } else {
        $state.complete()
      }
    },
  },
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

  .contest-table {
    margin-top: 2px;
    margin-bottom: 2px;
    th,td {
      text-align: center;
      padding: 8px;
    }
  }

  .feed_footer {
    color: gray;
    .timestamp {
      margin-left: 3px;
    }
  }
}
</style>
