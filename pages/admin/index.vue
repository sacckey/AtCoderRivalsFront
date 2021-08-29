<template>
  <div>
    <h1>Admin</h1>
    <ul class="list">
      <li>
        <nuxt-link to="admin/users">
          users
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/atcoder_users">
          atcoder_users
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/contests">
          contests
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/problems">
          problems
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/submissions">
          submissions
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="admin/histories">
          histories
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: 'admin'
}
</script>

<style lang='scss' scoped>
  h1 {
    text-align: center;
  }
</style>
