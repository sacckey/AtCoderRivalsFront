<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <Feeds baseURL="v1/timeline" />
    </div>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Feeds from '~/components/Feeds.vue'

export default Vue.extend({
  middleware: 'auth',
  components: {
    Sidebar,
    Feeds
  }
})
</script>
