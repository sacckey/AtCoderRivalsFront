<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href='/'>AtCoder Rivals</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href='/'>Home</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href='/search'>Search</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href='/about'>About</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown text='Account' right>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>