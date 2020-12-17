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
        <nuxt-link to="/about" class="btn btn-danger btn-lg">About</nuxt-link>
        <nuxt-link to="/about" class="btn btn-primary btn-lg">Sign up with Twitter</nuxt-link>
        <nuxt-link to="/about" class="btn btn-warning btn-lg">Try without signing up</nuxt-link>
        <!-- 
          <%= link_to "About", about_path, class: "btn btn-danger btn-lg" %>
        <%= link_to '/auth/twitter', class: "btn btn-primary btn-lg", method: :post do %>
          <span class="fab fa-twitter"></span> Sign up with Twitter
        <% end%>
        <%= link_to "Try without signing up", "/login_sample", class: "btn btn-warning btn-lg" %> -->
      </div>
    </div>
  </div>
</template>