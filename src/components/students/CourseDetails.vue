<script>
import axios from 'axios'
const API_KEY = import.meta.env.VITE_UNIHUB_API

export default {
  name: 'CourseDetails',
  data: () => ({
    page: 1,
    courseWorks: null,
    coursesDetails: []
  }),
  mounted() {
    this.getCourseWorks()
  },
  methods: {
    async getCourseWorks() {
      const response = await axios.get(`${API_KEY}/courseWork`)
      this.courseWorks = response.data

      this.fetchDetails()
    },
    fetchDetails() {
      this.coursesDetails = this.courseWorks.filter((courseWorks) =>
        courseWorks.courseId.includes(this.$route.params.course_id)
      )
    },
    courseWorkDetails(id) {
      this.$router.push(`/courseWorkDetails/${id}`)
    }
  }
}
</script>
<template>
  <h3>Assignments</h3>
  <v-data-iterator :items="coursesDetails" :page="page">
    <template v-slot:default="{ items }">
      <template v-for="(item, i) in items" :key="i">
        <v-card>
          <v-row class="d-flex align-center">
            <v-col>
              <v-card-title>{{ item.raw.type }}</v-card-title>
              <v-card-subtitle>Weight: {{ item.raw.weight }}</v-card-subtitle>
            </v-col>
            <v-col class="text-right">
              <button @click="courseWorkDetails(item.raw._id)">
                View Details
              </button>
            </v-col>
          </v-row>
        </v-card>
        <br />
      </template>
    </template>
  </v-data-iterator>
</template>

<style></style>
