<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <div class="profile">
        <a href="https://atcoder.jp/users/Yama24"><img alt="Yama24" class="icon" src="https://img.atcoder.jp/icons/dad973aa2cb707d7b4720afda8b4f294.png" width="100" height="100"></a>
        <div class="info">
          <h1>
            <a class="rate_green" href="https://atcoder.jp/users/Yama24">Yama24</a>
          </h1>
          <table>
            <tbody><tr><th>Rating</th><td><span class="rate_green">987</span></td></tr>
            <tr><th>AC</th><td>0</td></tr>
          </tbody></table>
        </div>
      </div>
      <Feeds />
    </div>
  </b-row>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Feeds from '~/components/Feeds.vue'

export default {
  components: {
    Sidebar,
    Feeds
  }
}
</script>

<style lang='scss'>
.profile {
  height: 100px;
  margin-bottom: 20px;

  h1 {
    font-size: 1.4em;
    text-align: left;
    letter-spacing: -1px;
    margin-bottom: 0px;
  }

  .info {
    margin-left: 120px;
  }

  table {
    margin-top: 28px;
    width: 100px;
  }
}
</style>