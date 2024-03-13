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

        const studentReport = this.reports.find(
          (report) => report.student === this.submissionDetails.studentId[0]._id
        )

        if (studentReport) {
          studentReport.submittions.push(subID)

          await axios.put(`${API}/report/${studentReport._id}`, {
            submittions: studentReport.submittions,
          })

          await this.refreshReports()

          alert("Grade added")
        } else {
          console.error("Student report not found")
        }

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
