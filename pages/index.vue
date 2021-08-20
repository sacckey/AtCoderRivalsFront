<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <Feeds base-url="v1/timeline" />
    </div>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth'
})
</script>
