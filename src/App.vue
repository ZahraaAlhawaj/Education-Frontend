<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
