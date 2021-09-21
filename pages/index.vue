<template>
  <div>
    <b-row v-if="$store.getters.isLoggedIn">
      <Sidebar />
      <div class="col-lg-8">
        <Feeds base-url="v1/timeline" />
      </div>
    </b-row>
    <Top v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
