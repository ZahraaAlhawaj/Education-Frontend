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
  }
}
</script>
<template>
  <section>
    <h1>All Students Registered in UOGA</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">GPA</th>
          <!-- add plan name -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.GPA }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
