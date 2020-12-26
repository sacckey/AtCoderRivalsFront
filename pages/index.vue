<template>
  <div>
    <b-row>
      <Sidebar />
      <div class="col-lg-8">
        <Feeds />
      </div>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Feeds from '~/components/Feeds.vue'

export default Vue.extend({
  components: {
    Sidebar,
    Feeds
  },
  computed: {
    // isAuthenticated() {
    //   return this.$store.getters.isAuthenticated
    // }
  }
})
</script>
