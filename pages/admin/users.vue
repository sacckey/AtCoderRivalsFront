<template>
  <div>
    <h2>Users</h2>
    count: {{ totalRows }}
    <table class="table table-striped table-bordered contest-table">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>created_at</th>
          <th>updated_at</th>
          <th>atcoder_user_id</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in list"
          :key="user.id"
        >
          <td>
            <a :href="`https://twitter.com/i/user/${user.twitter_uid}`" target="_blank">
              <img :alt="user.user_name" :src="user.image_url" width="20" height="20">
            </a>
          </td>
          <td><a :href="`https://twitter.com/i/user/${user.twitter_uid}`" target="_blank">{{ user.user_name }}</a></td>
          <td>
            {{ $dayjs(user.created_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs(user.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ user.atcoder_user_id }}
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
        const data = await this.$axios.$get('v1/admin/users', {
          params: {
            page,
            withCount
          }
        })
        this.list = data.users
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
