<template>
  <b-tab title="Submissions" active>
    <h3>Submissions</h3>
    <ol class="feeds">
      <li
          v-for="submission in submissions"
          :key="submission.number"
          :id="submission.number"
      >
        <div class="feed">
          <nuxt-link :to="`/atcoder_users/${submission.atcoder_id}`"><img :alt="submission.atcoder_id" class="icon" :src="submission.image_url" width="50" height="50"></nuxt-link>
          <div class="submission">
            <div>
              <a :class="`btn btn-xs btn-${submission.result.toLowerCase()}`" :href="`https://atcoder.jp/contests/${submission.contest_name}//${submission.number}`">{{ submission.result }}</a>
              <nuxt-link class="name" :to="`/atcoder_users/${submission.atcoder_id}`">{{ submission.atcoder_id }}</nuxt-link>
            </div>
            <div>
              <a :href="`https://atcoder.jp/contests/${submission.contest_name}`">{{ submission.contest_title }}</a>
              <a :href="`https://atcoder.jp/contests/${submission.contest_name}/tasks/${submission.problem_name}`">{{ submission.problem_title }}</a>
            </div>
            <div class="feed_footer">
              {{ submission.language }}
              <span class="timestamp">{{ $dayjs(submission.epoch_second * 1000).format('YYYY-MM-DD HH:mm:ss') }}</span>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </b-tab>
</template>

<script>
export default {
  props: {
    submissions: Array,
  }
}
</script>
