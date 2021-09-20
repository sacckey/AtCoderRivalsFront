<template>
  <b-row>
    <Sidebar />
    <div class="col-md-8">
      <h3>User Search</h3>
      <SearchForm />
    </div>
  </b-row>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
