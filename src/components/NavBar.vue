<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <nav>
    <router-link to="/" name="HomePage">Home</router-link>
    <router-link to="/signIn">Sign In</router-link>
  </nav>
</template>

<style>
.router-link-exact-active {
  color: #adadad;
}

nav {
  background: #c92519;
  padding: 1em;
}

nav a {
  margin: 1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
}
</style>
