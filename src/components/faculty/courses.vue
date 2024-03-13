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
 <v-table> 
  <thead>

  <tr>
      <th class="text-left">Name</th>
      <th class="text-left">Code</th>
      <th class="text-left">Numner of students</th>
      <th class="text-left">Timing</th>
      <th class="text-left">Room</th>
      <th class="text-left">Building</th>
      <th class="text-left">View Details</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="courses.courses.id" v-for="cours in courses.courses">
      <td>{{ cours.name }}</td>
      <td>{{ cours.code }}</td>
      <td>{{ cours.students.length }}</td>
      <td>{{ cours.timing }}</td>
      <td>{{ cours.room }}</td>
      <td>{{ cours.building }}</td>
      <td><v-btn variant="tonal"  @click="viewCourseWork(cours._id)">Details</v-btn></td>
    </tr>
  </tbody>
  </v-table>
</template>
<style>
button{
  color: blue;
}

</style>
