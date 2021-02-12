<template>
  <div class="jumbotron jumbotron-fluid jumbotron-extend">
    <div class="container-fluid jumbotron-container">
      <div class="acr">
        <h1>AtCoder Rivals</h1>
      </div>
      <div class="btns">
        <a class="btn btn-danger btn-lg" href="/about">About</a>
        <a class="btn btn-primary btn-lg" v-on:click="login">
          <span class="fab fa-twitter"></span> Sign up with Twitter
        </a>
        <a class="btn btn-warning btn-lg" href="/login_sample">Try without signing up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'top',
  middleware({ store, redirect }) {
    if(store.getters['isLoggedIn']) {
      redirect('/');
    }
  },
  methods: {
    login() {
      const provider = new this.$fireModule.auth.TwitterAuthProvider()
      this.$fire.auth.signInWithPopup(provider)
      .then((result) => {
        // ログイン成功時の処理
        window.alert('ログインしました')
        window.location.reload()
       }).catch((error) => {
         // ログイン失敗時の処理
         window.alert('ログインに失敗しました')
         console.log(error)
       })
    }
  }
}
</script>

<style lang='scss' scoped>
$brown: #5c4d42 !default;
.top {
  padding: 0;
}
.list {
  font-size: 1.1em;
  line-height: 1.7em;
}

.jumbotron {
  margin: 0;
}

.jumbotron-extend {
  // padding-top: 0;
  position: relative;
  height: 100vh;
  min-height: 300px;
  // background-size: auto 100vh;
  // background-image: image-url('bg-masthead.jpg');

  // background-color:rgba(92,77,66,0.5);
  // background-blend-mode: darken;
  // background-blend-mode: lighten;

  // background: linear-gradient(to bottom, #{fade-out(#5c4d42, .2)} 0%,#{fade-out(#5c4d42, .2)} 100%), image-url('../assets/images/bg-masthead.jpg');
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url('../assets/images/bg-masthead.jpg');
  // background: url("../assets/images/bg-masthead.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;

  .jumbotron-container {
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
  }
  .acr{
    margin-top: 140px;
    h1{
      font-size: 95px;
    }
  }
  .btn {
    width: 250px;
  }
  .btn-danger {
    display: block;
    margin: auto;
    border-radius:23px;
    margin-top: 120px;
    margin-bottom: 30px;
  }
  .btn-primary, .btn-warning{
    margin: 0px 10px;
    margin-top: 20px;
  }
  .fab{
    margin-right:5px;
  }
}
</style>