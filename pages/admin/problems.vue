<template>
  <div>
    <h2>Contests</h2>
    count: {{ totalRows }}
    <table class="table table-striped table-bordered contest-table">
      <thead>
        <tr>
          <th>contest_name</th>
          <th>name</th>
          <th>title</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="problem in list"
          :key="problem.id"
        >
          <td>
            {{ problem.contest_name }}
          </td>
          <td>
            {{ problem.name }}
          </td>
          <td>
            {{ problem.title }}
          </td>
          <td>
            {{ $dayjs(problem.created_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs(problem.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
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
        const data = await this.$axios.$get('v1/admin/problems', {
          params: {
            page,
            withCount
          }
        })
        this.list = data.problems
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
