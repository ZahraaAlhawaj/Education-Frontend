<script>
import axios from 'axios'
const API_KEY = import.meta.env.VITE_UNIHUB_API

export default {
  name: 'StudentReport',
  data: () => ({
    reports: null,
    reportDetails: null,
    grade: null,
    GPA: null,
    headers: [
      { title: 'Course Name', align: 'start', key: 'name' },
      { title: 'Course Code', align: 'start', key: 'code' },
      { title: 'Overall Score', align: 'start', key: 'score' },
      { title: 'Grade', align: 'start', key: 'grade' }
    ]
  }),
  mounted() {
    this.getReports()
    this.getStudentGPA()
  },
  methods: {
    async getReports() {
      const response = await axios.get(`${API_KEY}/report`)
      this.reports = response.data

      this.fetchDetails()
    },
    fetchDetails() {
      const stu = localStorage.getItem("userId")
      this.reportDetails = this.reports.filter(
        (reports) => reports.student._id == stu
      )
    },
    async getStudentGPA() {
      const stu = localStorage.getItem("userId")
      const res = await axios.get(`${API_KEY}/student/${stu}`)
      this.GPA = res.data.GPA
    },
    calculateGrade(score) {
      if (score <= 100 && score > 89) {
        this.grade = 'A'
      } else if (score < 90 && score > 79) {
        this.grade = 'B'
      } else if (score < 80 && score > 69) {
        this.grade = 'C'
      } else if (score < 70 && score > 59) {
        this.grade = 'D'
      } else {
        this.grade = 'F'
      }
      return this.grade
    }
  },
  computed: {
    virtualReports() {
      return this.reportDetails.map((report, index) => {
        return {
          id: report._id,
          name: report.course.name,
          code: report.course.code,
          score: report.totalScore
          // grade: course.grade,
        }
      })
    }
  }
}
</script>

<template>
  <label>Current total GPA: {{ this.GPA }}</label>
  <v-data-table-virtual
    v-if="reportDetails"
    :headers="headers"
    :items="virtualReports"
    height="400"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.score }}</td>
        <td>{{ calculateGrade(item.score) }}</td>
      </tr>
    </template>
  </v-data-table-virtual>
</template>
