<template>
  <div class="update-profile-container">
    <h1>Update your profile</h1>
    <div class="update-profile-form">
      <form class="edit_atcoder_user" id="edit_atcoder_user_8" action="/users/1" accept-charset="UTF-8" method="post">
        <input type="hidden" name="_method" value="patch">
        <input type="hidden" name="authenticity_token" value="DM2Miw/YYuCrFCPMe+X7f6Nkkz3zksTAYEQNGYv4JUWzktTtrEAzH1JR/9Bn/Ib6z8+yQcnERTyRrhmU1OjBpg==">
        <label for="atcoder_user_atcoder_id">AtCoder ID</label>
        <input class="form-control" type="text" value="Yama24" name="atcoder_user[atcoder_id]" id="atcoder_user_atcoder_id">
        <input type="submit" name="commit" value="Save changes" class="btn btn-primary" data-disable-with="Save changes">
      </form>
    </div>
  </div>
</template>

<style lang='scss' scoped>
  h1{
    text-align: center;
  }
  .update-profile-container{
    text-align: center;
  }
  .update-profile-form{
    width: 70%;
    display: inline-block;
  }
  .edit_atcoder_user {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  input.form-control{
    width: 100%;
  }

  label {
    margin-bottom: 5px;
    font-weight: 700;
    float: left;
  }

  .btn{
    margin-top: 10px;
    width: 100%;
  }
</style>