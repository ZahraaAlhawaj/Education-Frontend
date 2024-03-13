<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AdminStudents',
  data: function () {
    return {
      students: [],
      searchQuery: ''
    }
  },
  mounted: async function () {
    await this.fetchStudents()
  },
  methods: {
    async fetchStudents() {
      const response = await axios.get(`${BASE_URL}/student/`)
      this.students = response.data
    },
    getStudentGPA(gpa) {
      if (gpa <= 4 && gpa > 3) {
        return 'A'
      } else if (gpa < 3 && gpa > 2) {
        return 'B'
      } else if (gpa < 2 && gpa > 1) {
        return 'C'
      } else if (gpa < 1 && gpa > 0) {
        return 'D'
      } else {
        return 'F'
      }
    },
    handleSearch() {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  computed: {
    filteredStudents() {
      if (!this.searchQuery) return this.students
      return this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<template>
  <section>
    <h1>All Students Registered in UOGA</h1>
    <section>
      <router-link to="/addstudentform" name="AddStudentForm"
        >Add a student</router-link
      >
    </section>
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
          <th class="text-left">Email</th>
          <th class="text-left">GPA</th>
          <th class="text-left">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in filteredStudents" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.GPA }}</td>
          <td>{{ getStudentGPA(student.GPA) }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>

<style scoped>
.custom-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 15%;
  box-sizing: border-box;
}
</style>
