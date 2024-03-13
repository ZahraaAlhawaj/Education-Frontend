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
      searchQuery: "",
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
      const url = `/ViewStudentSubmition/${id}/${stuName}/${AName}/${Ques}`
      window.location.href = url
    },
    handleSearch() {
      this.filteredSubmitions = this.submitions.filter((submission) => {
        const studentNames = submission.studentId.map((student) => student.name)
        return studentNames.some((name) =>
          name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    },
  },
  computed: {
    filteredSubmitions() {
      if (!this.searchQuery) return this.submitions
      return this.submitions.filter((submission) => {
        const studentNames = submission.studentId.map((student) => student.name)
        return studentNames.some((name) =>
          name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ courseWorkData.type }} - Student Submissions</h1>
    <input
      placeholder="Search for Student.."
      v-model="searchQuery"
      @input="handleSearch"
      class="custom-input"
    />
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Grade Submission</th>
          <th class="text-left">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sub in filteredSubmitions" :key="sub._id">
          <th v-if="sub.studentId && sub.studentId.length > 0">
            {{ sub.studentId.map((student) => student.name).join(", ") }}
          </th>
          <th>
            <v-btn
              variant="tonal"
              @click="
                goToStudentSubmition(
                  sub._id,
                  sub.studentId && sub.studentId.length > 0
                    ? sub.studentId.map((student) => student.name).join(', ')
                    : 'N/A',
                  courseWorkData.type,
                  sub.courseWorkId[0].question
                )
              "
            >
              View Submission
            </v-btn>
          </th>
          <th>{{ sub.grade }}/{{ courseWorkData.weight }}</th>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.custom-input {
  /* Custom input styles */
  border: 1px solid #ccc;
    border-radius: 4px;
  padding: 8px;
  width: 15%;
  box-sizing: border-box;
}
</style>
