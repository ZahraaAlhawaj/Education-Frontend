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
      reports: [],
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
        console.log("submitions", this.submissionDetails)
        const getAllReports = await axios.get(`${API}/report`)
        this.reports = getAllReports.data
        console.log(this.reports)
      } catch (error) {
        console.error("Error fetching submission details:", error)
      }
    },
    async updateGrade(subID) {
      try {
        await axios.put(`${API}/submition/${subID}`, {
          grade: this.gradeInput,
        })

        const allSubmissionsResponse = await axios.get(`${API}/submition`)
        const allSubmissions = allSubmissionsResponse.data

        const studentSubmissions = allSubmissions.filter((submission) =>
          submission.studentId.some(
            (id) => id === this.submissionDetails.studentId[0]._id
          )
        )

        let totalGrade = 0
        for (const submission of studentSubmissions) {
          totalGrade += submission.grade || 0
        }
        const newGPA =
          studentSubmissions.length > 0
            ? totalGrade / studentSubmissions.length
            : 0

        const updatedGPA = Math.min(newGPA, 4)

        await axios.put(
          `${API}/student/${this.submissionDetails.studentId[0]._id}`,
          {
            GPA: updatedGPA,
          }
        )

        await this.refreshReports()

        alert("Grade added")

        this.gradeInput = null
      } catch (error) {
        console.error("Error updating grade:", error)
      }
    },

    async refreshReports() {
      try {
        const response = await axios.get(`${API}/report`)
        this.reports = response.data
      } catch (error) {
        console.error("Error refreshing reports:", error)
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
