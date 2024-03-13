<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'ViewFacultyMember',
  data: function () {
    return {
      faculty: null
    }
  },
  mounted: async function () {
    const response = await axios.get(
      `${BASE_URL}/faculty/${this.$route.params.faculty_id}`
    )
    console.log(response.data)
    this.faculty = response.data
  }
}
</script>
<template>
  <section v-if="this.faculty">
    <h1>{{ this.faculty.name }}</h1>
    <h3>Email: {{ this.faculty.email }}</h3>
    <router-link
      :to="`/addcoursetofacultyform/${this.faculty._id}`"
      name="AddCourseToFacultyForm"
      >Add a course to {{ this.faculty.name }}</router-link
    >
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Course Name</th>
          <th class="text-left">Code</th>
          <th class="text-left">Timing</th>
          <th class="text-left">Days</th>
          <th class="text-left">Number of Students</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in faculty.courses" :key="course._id">
          <td>{{ course.name }}</td>
          <td>{{ course.code }}</td>
          <td>{{ course.timing }}</td>
          <td>{{ course.days }}</td>

          <td>{{ course.students.length }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
