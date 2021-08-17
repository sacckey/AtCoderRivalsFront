<template>
  <div>
    <h1>About</h1>
    <p>
      <a href="https://atcoder.jp/" target="_blank"> AtCoder</a>のコンテストでのパフォーマンスやレート遷移、日々の精進などをライバルたちと比較し、モチベーション向上に繋げるためのアプリです。<br>
      フォローしたユーザーの最近の提出とコンテスト成績を見ることができます。
    </p>

    <div class="row screenshot">
      <div class="col-xl-6">
        <img alt="submissions" width="500px" src="~/assets/images/submissions.png">
      </div>
      <div class="col-xl-6">
        <img alt="contests" width="500px" src="~/assets/images/contests.png">
      </div>
    </div>

    <h4>How to use</h4>
    <ol class="list">
      <li>Twitterアカウントで登録/ログインします。登録無しで試してみたい方は、"Try without signing up"ボタンを押してください。</li>
      <li>Account → Settingsを押して、あなたのAtCoder IDを設定してください。</li>
      <li>SearchからAtCoderユーザーを検索/フォローすると、そのユーザーの最近の提出とコンテスト結果を見ることができます。</li>
    </ol>

    <h4>Contact</h4>
    <p>不具合や改善要望等がございましたら、以下までご連絡をお願いいたします。</p>
    <ul class="list">
      <li>Twitter: <a href="https://twitter.com/sacckey" target="_blank">https://twitter.com/sacckey</a></li>
      <li>GitHub: <a href="https://github.com/sacckey/AtCoderRivals" target="_blank">https://github.com/sacckey/AtCoderRivals</a></li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
  .screenshot {
    text-align: center;
    margin-bottom: 20px;
  }
  h1{
    text-align: center;
  }
</style>
