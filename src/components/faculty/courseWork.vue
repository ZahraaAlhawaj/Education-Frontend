<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API

export default {
  name: "courseWork",

  data() {
    return {
      courseId: null,
      course: [],
      courseWorkData: [],
    }
  },
  mounted() {
    this.courseId = this.$route.params.id

    this.getCourseWork(this.courseId)
  },
  methods: {
    async getCourseWork(id) {
      const courseInfo = await axios.get(`${API}/course/${id}`)
      this.course = courseInfo.data

      const res = await axios.get(`${API}/courseWork`)
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].courseId.includes(id)) {
          this.courseWorkData.push(res.data[i])
        }
      }
    },
    async addNewAssignment(id) {
      const url = `/${id}`
      window.location.href = url
    },
    async viewStudentSubs(id) {
      const url = `/studentSubmitions/${id}`
      window.location.href = url
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ course.name }}</h1>
    <button @click="addNewAssignment(course._id)">Add New Assignment</button>
    <v-data-table>
      <tr v-for="cours in courseWorkData">
        <th>{{ cours.type }}</th>
        <th>
          <button @click="viewStudentSubs(cours._id)">
            View Student Submition
          </button>
        </th>
      </tr>
    </v-data-table>
  </div>
</template>

<style></style>
