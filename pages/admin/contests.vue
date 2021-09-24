<template>
  <div>
    <h2>Contests</h2>
    count: {{ totalRows }}
    <table class="table table-striped table-bordered contest-table">
      <thead>
        <tr>
          <th>name</th>
          <th>title</th>
          <th>start</th>
          <th>end</th>
          <th>rate_change</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contest in list"
          :key="contest.id"
        >
          <td>
            {{ contest.name }}
          </td>
          <td>
            {{ contest.title }}
          </td>
          <td>
            {{ $dayjs(contest.start_epoch_second * 1000).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs((contest.start_epoch_second + contest.duration_second) * 1000).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ contest.rate_change }}
          </td>
          <td>
            {{ $dayjs(contest.created_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs(contest.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
        </tr>
      </tbody>
    </table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      @change="handlePageChange"
    />
  </div>
</template>

<script>
export default {
  middleware: 'admin',
  async fetch () {
    await this.getList(this.currentPage, true)
  },
  data () {
    return {
      perPage: 30,
      currentPage: 1,
      totalRows: 0,
      list: []
    }
  },
  methods: {
    handlePageChange (page) {
      this.getList(page)
    },
    async getList (page, withCount = null) {
      try {
        const data = await this.$axios.$get('v1/admin/contests', {
          params: {
            page,
            withCount
          }
        })
        this.list = data.contests
        if (withCount) {
          this.totalRows = data.count
        }
      } catch (err) {
        this.showErrorAlert(err)
      }
    }
  }
}
</script>
