<template>
  <div>
    <h2>Atcoder Users</h2>
    count: {{ totalRows }}
    <table class="table table-striped table-bordered contest-table">
      <thead>
        <tr>
          <th>#</th>
          <th>atcoder_id</th>
          <th>accepted_count</th>
          <th>rated_point_sum</th>
          <th>rating</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="atcoderUser in list"
          :key="atcoderUser.id"
        >
          <td>
            <a :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`" target="_blank">
              <img :alt="atcoderUser.atcoder_id" :src="atcoderUser.image_url" width="20" height="20">
            </a>
          </td>
          <td>
            <a :class="ratingColor(atcoderUser.rating)" :href="`https://atcoder.jp/users/${atcoderUser.atcoder_id}`" target="_blank">{{ atcoderUser.atcoder_id }}</a>
          </td>
          <td>
            {{ atcoderUser.accepted_count }}
          </td>
          <td>
            {{ atcoderUser.rated_point_sum }}
          </td>
          <td>
            <span :class="ratingColor(atcoderUser.rating)">{{ atcoderUser.rating }}</span>
          </td>
          <td>
            {{ $dayjs(atcoderUser.created_at).format('YYYY-MM-DD HH:mm:ss') }}
          </td>
          <td>
            {{ $dayjs(atcoderUser.updated_at).format('YYYY-MM-DD HH:mm:ss') }}
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
        const data = await this.$axios.$get('v1/admin/atcoder_users', {
          params: {
            page,
            withCount
          }
        })
        this.list = data.atcoder_users
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
