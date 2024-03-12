<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API
export default {
  name: "Courses",
  data: () => ({
    courses: [],
    facultyId: "65f0265d9b596775d3720a6e", //user id getting from the localstorage
  }),
  mounted() {
    // get the courses when the first page open up
    this.getFacultyMemberCourses("65f0265d9b596775d3720a6e")
  },
  methods: {
    async getFacultyMemberCourses(id) {
      const res = await axios.get(`${API}/faculty/${id}`)
      this.courses = res.data
      console.log(res.data)
    },
  },
}
</script>
<template>
  <!-- <p>{{ courses }}</p> -->
  <table :key="courses.courses.id" v-for="cours in courses.courses">
    <tr>
      <th>Name</th>
      <th>Code</th>
      <th>Numner of students</th>
      <th>Timing</th>
      <th>Room</th>
      <th>Building</th>
      <th>View Details</th>
    </tr>
    <tr>
      <th>{{ cours.name }}</th>
      <th>{{ cours.code }}</th>
      <th>{{ cours.students.length }}</th>
      <th>{{ cours.timing }}</th>
      <th>{{ cours.room }}</th>
      <th>{{ cours.building }}</th>
      <th><a href="#">Detatils</a></th>
    </tr>
  </table>
</template>
<style></style>
