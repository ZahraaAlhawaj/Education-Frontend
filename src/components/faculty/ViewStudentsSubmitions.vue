<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API
export default {
  name: "studentSubmitions",

  data() {
    return {
      assignmentId: null,
      courseWorkData: {},
      submitions: [],
      students: [],
    }
  },
  mounted() {
    this.assignmentId = this.$route.params.id
    this.getCourseWork(this.assignmentId)
  },
  methods: {
    async getCourseWork(id) {
      try {
        const courseInfo = await axios.get(`${API}/courseWork/${id}`)
        this.courseWorkData = courseInfo.data
        console.log(this.courseWorkData)
        console.log("Received course ID:", id)

        const sub = await axios.get(`${API}/submition`)
        for (let i = 0; i < sub.data.length; i++) {
          if (sub.data[i].courseWorkId.includes(id)) {
            const submission = sub.data[i]
            const submissionDetails = await this.getSubmissionDetails(
              submission._id
            )
            this.submitions.push(submissionDetails)
          }
        }
        console.log(this.submitions)
      } catch (error) {
        console.error("Error fetching course work:", error)
      }
    },
    async getSubmissionDetails(submissionId) {
      try {
        const response = await axios.get(`${API}/submition/${submissionId}`)
        return response.data
      } catch (error) {
        console.error("Error fetching submission details:", error)
        return null
      }
    },
    async goToStudentSubmition(id, stuName, AName, Ques) {
      // :id/:StuName/:AName/:Ques
      const url = `/ViewStudentSubmition/${id}/${stuName}/${AName}/${Ques}`
      // Navigate to the URL
      window.location.href = url
    },
  },
}
</script>

<template>
  <h1>{{ courseWorkData.type }} - Student Submitions</h1>

  <v-data-table>
    <tr>
      <th>Name</th>
      <th>Grade Submission</th>
      <th>Score</th>
    </tr>
    <!-- :key="courses.courses.id" v-for="cours in courses.courses" -->
    <tr v-for="sub in submitions" :key="sub._id">
  <th v-if="sub.studentId && sub.studentId.length > 0">
    {{ sub.studentId.map(student => student.name).join(', ') }}
  </th>
  <th>
    <button 
      @click="
        goToStudentSubmition(
          sub._id,
          sub.studentId && sub.studentId.length > 0 ? sub.studentId.map(student => student.name).join(', ') : 'N/A',
          courseWorkData.type,
          sub.courseWorkId[0].question
        )
      "
    >
      View Submition
    </button>
  </th>
  <th>{{ sub.grade }}/{{ courseWorkData.weight }}</th>
</tr>

  </v-data-table>

  <!-- {{ assignmentId }} -->
</template>
<style></style>
