<script>
export default {
  name: "NavBar",
  data() {
    return {
      userType: localStorage.getItem("userType") || null,
    }
  },
  watch: {
    userType(newType) {
      console.log("User type changed:", newType)
    },
  },
  mounted() {
    window.addEventListener("storage", this.handleStorageChange)
    
  },
  beforeDestroy() {
    window.removeEventListener("storage", this.handleStorageChange)
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === "userType") {
        this.userType = event.newValue
      }
    },
  },
}
</script>

<template>
  <nav>
    <section v-if="userType && userType == 'admin'">
      <router-link to="/" name="HomePage">Home</router-link>
      <router-link to="/adminCourses" name="AdminCourses">Courses</router-link>
      <router-link to="/adminPlans" name="AdminPlans"
        >Academic Plans</router-link
      >
      <router-link to="/adminStudents" name="AdminStudents"
        >Students</router-link
      >
      <router-link to="/adminFaculty" name="AdminFaculty">Faculty</router-link>

      <router-link to="/signIn">Sign In</router-link>
    </section>
    <section v-else-if="userType === 'faculty'">
      <router-link to="/" name="HomePage">Home</router-link>
      <router-link to="/signOut">Sign Out</router-link>
    </section>
    <section v-else>
      <router-link to="/signIn">Sign In</router-link>
    </section>
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
