<template>
  <b-row>
    <Sidebar />
    <div class="col-lg-8">
      <h3>Following</h3>
      <ul class="followings">
        <li>
          <div class='following'>
            <a href="https://atcoder.jp/users/chokudai"><img alt="chokudai" class="icon" src="https://img.atcoder.jp/icons/4fd2d97cb550a125d671f47682153e1e.png" width="50" height="50"></a>
            <div class='follow-container'>
              <a class="atcoder_id" href="https://atcoder.jp/users/chokudai">chokudai</a>
              <div id="follow_form_2" class="follow_form">
                <form class="edit_relationship" id="edit_relationship_4" action="/relationships/4" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="gWIsoImJYjqMXRM0/f/pqjbL3KNolzEB48cftbi8TAEwSuaf0SSPg71+iv6xXzJBZlkdwLCDPsCzzmI1RhR6+A==">
                  <input type="submit" name="commit" value="Following" class="btn btn-primary" data-disable-with="Following">
                </form>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class='following'>
            <a href="https://atcoder.jp/users/chokudai"><img alt="chokudai" class="icon" src="https://img.atcoder.jp/icons/4fd2d97cb550a125d671f47682153e1e.png" width="50" height="50"></a>
            <div class='follow-container'>
              <a class="atcoder_id" href="https://atcoder.jp/users/chokudai">chokudai</a>
              <div id="follow_form_2" class="follow_form">
                <form class="edit_relationship" id="edit_relationship_4" action="/relationships/4" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="gWIsoImJYjqMXRM0/f/pqjbL3KNolzEB48cftbi8TAEwSuaf0SSPg71+iv6xXzJBZlkdwLCDPsCzzmI1RhR6+A==">
                  <input type="submit" name="commit" value="Following" class="btn btn-primary" data-disable-with="Following">
                </form>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </b-row>
</template>

<style lang='scss' scoped>
.atcoder_id {
  position: absolute;
}

.following {
  height: 50px;
}

.follow_form {
  padding-left: 150px;
  padding-top: 7px;
  position: relative;
}

.follow-container {
  padding-left: 60px;
}

.followings {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    border-top: 1px solid #e8e8e8;
    padding: 15px 0;
  }
}
</style>