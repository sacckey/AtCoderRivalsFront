<template>
  <!-- <body class="top"> -->
  <div class="jumbotron jumbotron-extend">
    <!-- <% flash.each do |message_type, message| %>
      <div class="alert alert-<%= message_type %>">
        <%= message %>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
      </div>
    <% end %> -->
    <div class="container-fluid jumbotron-container">
      <div class="acr">
        <h1>AtCoder Rivals</h1>
      </div>
      <div class="btns">
        <!-- <%= link_to "About", about_path, class: "btn btn-danger btn-lg" %>
        <%= link_to '/auth/twitter', class: "btn btn-primary btn-lg", method: :post do %>
          <span class="fab fa-twitter"></span> Sign up with Twitter
        <% end%>
        <%= link_to "Try without signing up", "/login_sample", class: "btn btn-warning btn-lg" %> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
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
</style>
