<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AdminStudents',
  data: function () {
    return {
      students: []
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/student/`)
    this.students = response.data
  },
  methods: {
    getStudentGPA(gpa) {
      if (gpa <= 4 && gpa > 3) {
        return 'A'
      } else if (gpa < 3 && gpa > 2) {
        return 'B'
      } else if (gpa < 2 && gpa > 1) {
        return 'C'
      } else if (gpa < 1 && scgpaore > 0) {
        return 'D'
      } else {
        return 'F'
      }
    }
  }
}
</script>
<template>
  <section>
    <h1>All Students Registered in UOGA</h1>
    <router-link to="/addstudentform" name="AddStudentForm"
      >Add a student</router-link
    >
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">GPA</th>
          <th class="text-left">Grade</th>

          <!-- add plan name -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.GPA }}</td>
          <td>{{ getStudentGPA(student.GPA) }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
