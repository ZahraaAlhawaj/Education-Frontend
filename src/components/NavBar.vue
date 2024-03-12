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
  color: #fff;
}

nav {
  background: #42b983;
  padding: 1em;
}

nav a {
  margin: 1em;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 800;
}
</style>
