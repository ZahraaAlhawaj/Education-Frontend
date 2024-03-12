<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API

export default {
  name: "ViewStudentSubmition",

  data() {
    return {
      assignmentId: null,
      submissionDetails: null,
      AName: null,
      Ques: null,
      stuName: null,
    }
  },

  mounted() {
    this.assignmentId = this.$route.params.id
    this.AName = this.$route.params.AName
    this.Ques = this.$route.params.Ques
    this.stuName = this.$route.params.StuName
    console.log(this.stuName)
    this.getCourseWork(this.assignmentId)
  },

  methods: {
    async getCourseWork(id) {
      try {
        // Fetch submission details for the given assignment ID
        const response = await axios.get(`${API}/submition/${id}`)
        this.submissionDetails = response.data
        console.log(this.submissionDetails)
      } catch (error) {
        console.error("Error fetching submission details:", error)
      }
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ AName }} - {{ stuName }}</h1>
    <div v-if="submissionDetails">
      <p>Question: {{ Ques }}</p>
      <p>Answer: {{ submissionDetails.answer }}</p>
      <p>Grade: {{ submissionDetails.grade }} / {{ submissionDetails.courseWorkId[0].weight }}</p>
      <!-- Add more fields to display other submission details -->
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style>
/* Add your styles here if needed */
</style>
