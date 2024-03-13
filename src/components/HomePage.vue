<script>
import Courses from "../components/faculty/courses.vue"

export default {
  name: "HomePage",
  components: {
    Courses,
  },
  data() {
    return {
      userType: "",
    }
  },
  mounted() {
    this.userType = localStorage.getItem("userType")
  },
}
</script>
<template>
  <Courses v-if="userType === 'faculty'" />
</template>
