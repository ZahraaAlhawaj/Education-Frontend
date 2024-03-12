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
        console.log("Received course ID:", id)

        const sub = await axios.get(`${API}/submition`)
        for (let i = 0; i < sub.data.length; i++) {
          if (sub.data[i].courseWorkId.includes(id)) {
            const submission = sub.data[i];
            const submissionDetails = await this.getSubmissionDetails(submission._id);
            this.submitions.push(submissionDetails);
          }
        }
      } catch (error) {
        console.error("Error fetching course work:", error);
      }
    },
    async getSubmissionDetails(submissionId) {
      try {
        const response = await axios.get(`${API}/submition/${submissionId}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching submission details:", error);
        return null;
      }
    }
  }
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
      <th v-for="stu in sub.studentId">{{ stu.name }}</th>
      <th><a href="#">View Submition</a></th>
      <th>{{ sub.grade }}/{{ courseWorkData.weight }}</th>
      <!-- <th><a href="#" @click="viewCourseWork(cours._id)">Detatils</a></th> -->
      <!-- <courseWork courseId="cours._id"/> -->
    </tr>
  </v-data-table>

  <!-- {{ assignmentId }} -->
</template>
<style></style>
