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
      gradeInput: null,
    }
  },

  mounted() {
    this.assignmentId = this.$route.params.id
    this.AName = this.$route.params.AName
    this.Ques = this.$route.params.Ques
    this.stuName = this.$route.params.StuName
    this.getCourseWork(this.assignmentId)
  },

  methods: {
    async getCourseWork(id) {
      try {
        const response = await axios.get(`${API}/submition/${id}`)
        this.submissionDetails = response.data
      } catch (error) {
        console.error("Error fetching submission details:", error)
      }
    },
    async updateGrade(subID) {
      try {
        const res = await axios.put(`${API}/submition/${subID}`, {
          grade: this.gradeInput,
        })
        alert("Grade added")
        this.gradeInput = null
      } catch (error) {
        console.error("Error updating grade:", error)
      }
    },
  },
}
</script>

<template>
  <div>
    <form @submit.prevent="updateGrade(submissionDetails._id)">
      <h1>{{ AName }} - {{ stuName }}</h1>
      <div v-if="submissionDetails">
        <p>Question: {{ Ques }}</p>
        <p>Answer: {{ submissionDetails.answer }}</p>
        <p>
          Grade:
          <input
            v-model.number="gradeInput"
            type="number"
            :placeholder="submissionDetails.grade"
            :min="0"
            :max="submissionDetails.courseWorkId[0].weight"
          />
          / {{ submissionDetails.courseWorkId[0].weight }}
        </p>
        <button type="submit">Add Grade</button>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </form>
  </div>
</template>

<style></style>
