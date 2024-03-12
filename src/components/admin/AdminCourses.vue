<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AdminCourses',
  data: function () {
    return {
      courses: []
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/course/`)
    this.courses = response.data
  }
}
</script>
<template>
  <section>
    <h1>All Courses Provided By UOGA</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Code</th>
          <th class="text-left">Prerequisite</th>
          <th class="text-left">Timing</th>
          <th class="text-left">Building</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course._id">
          <td>{{ course.name }}</td>
          <td>{{ course.code }}</td>
          <td>{{ course.preRequisite }}</td>
          <td>{{ course.timing }}</td>
          <td>{{ course.building }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
