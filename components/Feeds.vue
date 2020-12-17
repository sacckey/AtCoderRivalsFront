<template>
  <b-tabs content-class="mt-3">
    <Submissions />
    <Contests />
  </b-tabs>
</template>

<script>
import Submissions from '~/components/Submissions.vue'
import Contests from '~/components/Contests.vue'

export default {
  components: {
    Submissions,
    Contests
  }
}
</script>

<style lang='scss'>
/* feeds */
.feeds {
  list-style: none;
  padding: 0;
  li {
    border-top: 1px solid #e8e8e8;
    padding: 15px 0;
  }

  .submission {
    padding-left: 60px;
  }

  .contest-table {
    margin-top: 2px;
    margin-bottom: 2px;
    th,td {
      text-align: center;
      padding: 8px;
    }
  }

  .feed_footer {
    // $gray-light:   lighten(#000, 46.7%);
    color: gray;
    .timestamp {
      margin-left: 3px;
    }
  }
}
</style>