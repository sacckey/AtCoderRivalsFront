<template>
  <b-row>
    <Sidebar />
    <div class="col-md-8">
      <h3>Update your profile</h3>
      <SearchForm :initial-atcoder-id="authUser.atcoderId" />
    </div>
  </b-row>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
