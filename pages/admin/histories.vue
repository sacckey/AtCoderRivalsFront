<template>
  <div>
    <h2>Histories</h2>
    count: {{ totalRows }}
    <table class="table table-striped table-bordered contest-table">
      <thead>
        <tr>
          <th>is_rated</th>
          <th>place</th>
          <th>old_rating</th>
          <th>new_rating</th>
          <th>performance</th>
          <th>end_time</th>
          <th>atcoder_user_id</th>
          <th>contest_name</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="history in list"
          :key="history.id"
        >
          <td>
            {{ history.is_rated }}
          </td>
          <td>
            {{ history.place }}
          </td>
          <td>
            {{ history.old_rating }}
          </td>
          <td>
            {{ history.new_rating }}
          </td>
          <td>
            {{ history.performance }}
          </td>
          <td>
            {{ $dayjs(history.end_time).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ history.atcoder_user_id }}
          </td>
          <td>
            {{ history.contest_name }}
          </td>
          <td>
            {{ $dayjs(history.created_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs(history.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
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
        const data = await this.$axios.$get('v1/admin/histories', {
          params: {
            page,
            withCount
          }
        })
        this.list = data.histories
        if (withCount) {
          this.totalRows = data.count
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
