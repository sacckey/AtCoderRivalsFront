<template>
  <b-row>
    <aside class="col-md-4">
      <section class="user_info">
        <!-- <%= link_to show_icon(current_user,size: 60), current_user %>
        <h1><%= current_user.user_name %></h1>
        <% unless current_page?(current_user)%>
          <span><%= link_to "view my profile", current_user %></span>
          <span class="atid"> AtCoder ID: <%= link_to "#{current_user.atcoder_user.atcoder_id}", 
            "https://atcoder.jp/users/#{current_user.atcoder_user.atcoder_id}", class: "#{color(current_user.atcoder_user.rating)}" %>
          </span>
        <% end %> -->
        <!-- <a href="/users/1">
          <img alt="Example User" class="icon" src="https://img.atcoder.jp/assets/icon/avatar.png" width="60" height="60">
        </a> -->
        <nuxt-link to="/users/1">
          <img alt="Example User" class="icon" src="https://img.atcoder.jp/assets/icon/avatar.png" width="60" height="60">
        </nuxt-link>

        <h1>username</h1>

        <!-- TODO: my_pageを表示している場合は、以下を消す -->
        <span><nuxt-link to="/users/1">view my profile</nuxt-link></span>
        <span class="atid">
          AtCoder ID: 
          <a href="https://atcoder.jp/users/chokudai" class="rate_red">chokudai</a>
        </span>
        <!-- <span class="atid"> AtCoder ID: <%= link_to "#{current_user.atcoder_user.atcoder_id}", 
          "https://atcoder.jp/users/#{current_user.atcoder_user.atcoder_id}", class: "#{color(current_user.atcoder_user.rating)}" %>
        </span> -->
        
      </section>
      <section class="stats">
        <!-- <% @user ||= current_user %>
        <div class="stats">
          <a href="<%= following_user_path(@user) %>">
            <strong id="following" class="stat">
              <%= @user.following.count %>
            </strong>
            following
          </a>
        </div> -->
         <div class="stats">
          <nuxt-link to="/users/1/following">
            <strong id="following" class="stat">
              10
            </strong>
            following
          </nuxt-link>
        </div>
      </section>
    </aside>

    <div class="col-md-8">
      <b-tabs content-class="mt-3">
        <b-tab title="Submissions" active>
          <h3>Submissions</h3>
          <ol class="feeds">
            <li id="submission-<%= submission.id %>">
              <span class="feed_title">
                <div class="row">
                  <div class="col-md-1">
                    <a href="https://atcoder.jp/users/chokudai">
                      <img alt="Example User" class="icon" src="https://img.atcoder.jp/assets/icon/avatar.png" width="60" height="60">
                    </a>
                  </div>
                  <div class="col-md-11">
                    <div class="col-md-12">
                    <!-- <% if res=="AC"%>
                      <%= link_to res, submission_url(contest_name, submission.number), class: "btn btn-success btn-xs" %>
                    <% else %>
                      <%= link_to res, submission_url(contest_name, submission.number), class: "btn btn-warning btn-xs" %>
                    <% end %>
                    <%= link_to atcoder_id, atcoder_user_url(atcoder_id), class: "name" %> -->
                    <!-- link_to res, submission_url(contest_name, submission.number), class: "btn btn-success btn-xs" -->
                    <b-button size='xs' variant="success" href="https://atcoder.jp/contests/agc049/submissions/18098411">AC</b-button>
                    </div>
                    <div class="col-md-12">
                      <span class="content">
                        <a href="https://atcoder.jp/contests/agc049">AGC049</a>
                        <a href="https://atcoder.jp/contests/agc049/tasks/agc049_d">D - Convex Sequence</a>
                      </span>
                    </div>
                    <div class="col-md-12 feed_footer">
                      C#
                      <span class="timestamp">2020-11-14 22:57:16</span>
                    </div>
                  </div>
                </div>
              </span> 
            </li>
          </ol>
          <!-- <ol class="feeds">
            <%= render @submissions %>
          </ol>
          <ul class="pagination">
            <li class="prev"><%= link_to_prev_page @submissions, 'Prev', param_name: 'submissions' %></li>
            <li class="page active"><%= link_to @submissions.current_page,'javascript:void(0);' %></li>
            <li class="next"><%= link_to_next_page @submissions, 'Next', param_name: 'submissions' %></li>
          </ul> -->
        </b-tab>
        <b-tab title="Contests">
          <h3>Contests</h3>
          <ol class="feeds">
            <li id="contest-177">
  <span class="feed_title">
    <a href="https://atcoder.jp/contests/abc173">AtCoder Beginner Contest 173</a>
  </span>
  <span class="content">
    <table class="table table-striped table-bordered ">
      <thead>
          <tr>
            <th>#</th>
            <th>place</th>
            <th>name</th>
            <th>performance</th>
            <th>new rating</th>
          </tr>
      </thead>
      <tbody>
        
<tr id="history-198">
<td><a href="https://atcoder.jp/users/Yama24"><img alt="Yama24" class="icon" src="https://img.atcoder.jp/icons/dad973aa2cb707d7b4720afda8b4f294.png" width="20" height="20"></a></td>
<td><a href="https://atcoder.jp/contests/abc173/standings?watching=Yama24">4761</a></td>
<td><a class="rate_green" href="https://atcoder.jp/users/Yama24">Yama24</a></td>
  <td><span class="rate_brown">721</span></td>
  <td><span class="rate_green">987</span> (-26)</td>
</tr>
      </tbody>
    </table>
  </span>
  <span class="feed_footer">
    rate change:  ~ 1999
    <span class="timestamp">
    2020-07-05 12:00:00 +0000
    </span>
  </span>
</li>
          </ol>
          <!-- <%= paginate @contests, param_name: 'contests' %> -->
        </b-tab>
      </b-tabs>
    </div>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}







/* rate_color */
.rate_gray{
  color: gray;
}
.rate_brown{
  color: #804000;
}
.rate_green{
  color: green;
}
.rate_cyan{
  color: #00C0C0;
}
.rate_blue{
  color: blue;
}
.rate_yellow{
  color: #C0C000;
}
.rate_orange{
  color: #FF8000;
}
.rate_red{
  color: red;
}


/* mixins, variables, etc. */

$gray-medium-light: #eaeaea;

// TODO: bootstrap4対応. 要確認
$gray-darker:  lighten(#000, 13.5%); // #222
$gray-dark:    lighten(#000, 20%);   // #333
$gray:         lighten(#000, 33.5%); // #555
$gray-light:   lighten(#000, 46.7%); // #777
$gray-lighter: lighten(#000, 93.5%); // #eee
$state-danger-text: #a94442;
$brand-primary: #e87070;

@mixin box_sizing {
  -moz-box-sizing:    border-box;
  -webkit-box-sizing: border-box;
  box-sizing:         border-box;
}

/* universal */

body {
  padding-top: 60px;
}

section {
  overflow: auto;
}

textarea {
  resize: vertical;
}

.center {
  text-align: center;
  h1 {
    margin-bottom: 10px;
  }
}

/* typography */

h1, h2, h3, h4, h5, h6 {
  line-height: 1;
}

h1 {
  font-size: 3em;
  letter-spacing: -2px;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  margin-bottom: 30px;
  margin-top: 50px;
  padding-bottom: 10px;
  border-bottom: 1px solid $gray-medium-light;
//  font-size: 1.2em;
//  letter-spacing: -1px;
//  text-align: center;
//  font-weight: normal;
//  color: $gray-light;
}

h4 {
  font-size: 1.5em;
  margin-bottom: 15px;
  margin-top: 30px;
  padding-bottom: 5px;
  border-bottom: 1px solid $gray-medium-light;
}

p {
  font-size: 1.1em;
  line-height: 1.7em;
}


/* header */

#logo {
  float: left;
  margin-right: 10px;
  font-size: 1.7em;
  color: white;
  text-transform: uppercase;
  letter-spacing: -1px;
  padding-top: 9px;
  font-weight: bold;
  &:hover {
    color: white;
    text-decoration: none;
  }
}

/* footer */

footer {
  margin-top: 45px;
  padding-top: 5px;
  border-top: 1px solid $gray-medium-light;
  color: $gray-light;
  a {
    color: $gray;
    &:hover {
      color: $gray-darker;
    }
  }
  small {
    float: left;
  }
  ul {
    float: right;
    list-style: none;
    li {
      float: left;
      margin-left: 15px;
    }
  }
}

/* miscellaneous */

.debug_dump {
  clear: both;
  float: left;
  width: 100%;
  margin-top: 45px;
  @include box_sizing;
}

/* sidebar */

aside {
  margin-bottom: 20px;
  section.user_info {
    margin-top: 20px;
  }
  section {
    padding: 10px 0;
    margin-top: 20px;
    &:first-child {
      border: 0;
      padding-top: 0;
    }
    span {
      display: block;
      margin-bottom: 3px;
      line-height: 1;
    }
    span.atid{
      margin-top: 10px;
    }
    h1 {
      font-size: 1.4em;
      text-align: left;
      letter-spacing: -1px;
      margin-bottom: 3px;
      margin-top: 0px;
    }
  }
}

.icon {
  float: left;
  margin-right: 10px;
}

.icon_edit {
  margin-top: 15px;
}

.stats {
  overflow: auto;
  margin-top: 0;
  padding: 0;
  a {
    float: left;
    padding: 0 10px;
    border-left: 1px solid $gray-lighter;
    color: gray;
    &:first-child {
      padding-left: 0;
      border: 0;
    }
    &:hover {
      text-decoration: none;
      color: blue;
    }
  }
  strong {
    display: block;
  }
}

.user_avatars {
  overflow: auto;
  margin-top: 10px;
  .gravatar {
    margin: 1px 1px;
  }
  a {
    padding: 0;
  }
}

.users.follow {
  padding: 0;
}

a.atcoder_id{
  float: left;
}

.follow_form {
  // .edit_relationship, .new_relationship{
  //   display: inline-block;
  // }
  // text-align: right;
  // margin-right: 20em;

  .btn {
    width:  8em;
    margin-top: 10px;
  }
}

/* user_search */
.user_search {
  margin-top: 30px;
  margin-bottom: 50px;
}

/* forms */

input, textarea, select, .uneditable-input {
  border: 1px solid #bbb;
  width: 100%;
  margin-bottom: 15px;
  @include box_sizing;
}

input {
  height: auto !important;
}

#error_explanation {
  color: red;
  ul {
    color: red;
    margin: 0 0 30px 0;
  }
}

// todo:
// .field_with_errors {
//   @extend .has-error;
//   .form-control {
//     color: $state-danger-text;
//   }
// }

/* Users index */

.users {
  list-style: none;
  margin: 0;
  li {
    overflow: auto;
    padding: 10px 0;
    border-bottom: 1px solid $gray-lighter;
  }
}


/* feeds */

.feeds {
  list-style: none;
  padding: 0;
  li {
    border-top: 1px solid #e8e8e8;
    padding: 15px 0;
  }
  .feed_title {
    margin-top: 5em;
    padding-top: 0;
    .label{
      vertical-align: 1px;
    }
    .name{
      margin-left: 3px;
    }
    .col-md-12{
      padding: 0;
    }
    .col-md-6{
      padding: 0;
    }
    .col-md-3{
      padding: 0;
    }
    .col-md-2{
      padding: 0;
    }
    // .col-md-1{
    //   padding-left: 15px;
    //   padding-right: 3px;
    // }

  }
  .content {
    display: block;
    table {
      margin-top: 2px;
      margin-bottom: 2px;
      th,td {
        text-align: center;
        .icon{
          float: none;
          margin: 0;
        }
      }
    }
  }
  .feed_footer {
    color: $gray-light;
  }
  .timestamp {
    margin-left: 3px;
  }
  .gravatar {
    float: left;
    margin-right: 10px;
    margin-top: 5px;
  }
  .detail {
    margin-left: 0;
  }
}

aside {
  textarea {
    height: 100px;
    margin-bottom: 5px;
  }
}

span.picture {
  margin-top: 10px;
  input {
    border: 0;
  }
}

/* btn */
.btn-gray {
  background: gray;
  color: white;
}
.btn-gray:hover{
  background: dimgray;
  color: white;
}
.btn-default {
  color: $brand-primary;
  border-color: $brand-primary;
}
.btn-default:hover{
  color: $brand-primary;
  border-color: $brand-primary;
  background: white
}
.btn-xs {
  height: 19px;
  line-height: normal;
  font-weight: 500;
  margin-bottom: 2px;
}

/* static pages */

// home
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
  padding-top: 0;
  position: relative;
  height: 100vh;
  min-height: 300px;
  // background-size: auto 100vh;
  // background-image: image-url('bg-masthead.jpg');
  
  // background-color:rgba(92,77,66,0.5);
  // background-blend-mode: darken;
  // background-blend-mode: lighten;

  // background: linear-gradient(to bottom, #{fade-out($brown, .2)} 0%,#{fade-out($brown, .2)} 100%), image-url('bg-masthead.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;

  .jumbotron-container {
    position: relative;
    top: 50%;
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
    width: 220px;
  }
  .btn {
    width: 220px;
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

// about
.screenshot {
  text-align: center;
  img {
    margin-bottom: 50px;
    width:100%;
    max-width: 100%;
    height: auto;
  }
}

.btn-group-xs > .btn, .btn-xs {
  padding: .25rem .4rem;
  font-size: .875rem;
  line-height: .5;
  border-radius: .2rem;
}


.prof {
  h1 {
    font-size: 1.4em;
    text-align: left;
    letter-spacing: -1px;
    margin-bottom: 3px;
    margin-top: 0px;
  }
  height: 130px;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;

  img {
    float: left;
    margin: 0;
    margin-bottom: 10px;
  }

  table {
    margin-top: 40px;

    table-layout: fixed;
    width: 100px;
    // th {
    //   text-align: right;
    // }
  }
  .info {
    margin-left: 120px;
  }
}
</style>
