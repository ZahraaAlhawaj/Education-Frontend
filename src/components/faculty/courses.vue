<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API
import courseWork from './courseWork.vue'
export default {
  name: "Courses",
  components:{
courseWork,
  },
  data: () => ({
    courses: [],
    facultyId: localStorage.getItem("userId"),
    selectedCodeId: null
  }),
  mounted() {
    this.getFacultyMemberCourses(localStorage.getItem("userId"))
  },
  methods: {
    async getFacultyMemberCourses(id) {
      const res = await axios.get(`${API}/faculty/${id}`)
      this.courses = res.data
      console.log(res.data)
    },
    async viewCourseWork(id){
      console.log("Navigating to CourseWork with courseId:", id);
      const url = `/course/${id}`;
      // Navigate to the URL
      window.location.href = url;
    }
  },
}
</script>
<template>
  <v-data-table >
    <tr>
      <th>Name</th>
      <th>Code</th>
      <th>Numner of students</th>
      <th>Timing</th>
      <th>Room</th>
      <th>Building</th>
      <th>View Details</th>
    </tr>
    <tr :key="courses.courses.id" v-for="cours in courses.courses">
      <th>{{ cours.name }}</th>
      <th>{{ cours.code }}</th>
      <th>{{ cours.students.length }}</th>
      <th>{{ cours.timing }}</th>
      <th>{{ cours.room }}</th>
      <th>{{ cours.building }}</th>
      <th><a href="#" @click="viewCourseWork(cours._id)">Detatils</a></th>
    </tr>
  </v-data-table>
</template>
<style></style>
