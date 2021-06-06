<template>
    <b-tab title="Contests">
    <h3>Contests</h3>
    <ol class="feeds">
      <li
          v-for="contest in contests"
          :key="contest.contest_name"
          :id="contest.contest_name"
      >
        <a :href="`https://atcoder.jp/contests/${contest.contest_name}`">{{ contest.title }}</a>
        <div class="content">
          <table class="table table-striped table-bordered contest-table">
            <thead>
                <tr>
                  <th>#</th>
                  <th>place</th>
                  <th>name</th>
                  <th>performance</th>
                  <th>rating change</th>
                </tr>
            </thead>
            <tbody>
              <tr
                v-for="history in contest.histories"
                :key="history.atcoder_id"
                :id="history.atcoder_id"
              >
                <td><a :href="`https://atcoder.jp/users/${history.atcoder_id}`"><img :alt="history.atcoder_id" :src="history.image_url" width="20" height="20"></a></td>
                <td><a :href="`https://atcoder.jp/contests/abc173/standings?watching=${history.atcoder_id}`">{{ history.place }}</a></td>
                <td><a :class="ratingColor(history.old_rating)" :href="`https://atcoder.jp/users/${history.atcoder_id}`">{{ history.atcoder_id }}</a></td>
                  <td><span :class="ratingColor(history.performance)">{{ history.performance }}</span></td>
                  <td><span :class="ratingColor(history.old_rating)">{{ history.old_rating }}</span> → <span :class="ratingColor(history.new_rating)">{{ history.new_rating }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="feed_footer">
          <span>Rated change:{{ contest.rate_change }}</span>
          <span class="timestamp">{{ $dayjs(contest.start_epoch_second * 1000).format('YYYY-MM-DD HH:mm:ss') }}</span>
        </div>
      </li>
    </ol>
  </b-tab>
</template>

<script>
export default {
  props: {
    contests: Array,
  }
}
</script>