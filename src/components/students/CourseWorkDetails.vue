<script>
import axios from 'axios'
const API_KEY = import.meta.env.VITE_UNIHUB_API

export default {
  name: 'CourseWorkDetails',
  data: () => ({
    courseWorks: null,
    CourseWorkDetails: null,
    answerText: ''
  }),
  mounted() {
    this.getCourseWorks()
    // i want to get only the details of clicked ass
  },
  methods: {
    async getCourseWorks() {
      const response = await axios.get(`${API_KEY}/courseWork`)
      this.courseWorks = response.data

      this.fetchDetails()
    },
    fetchDetails() {
      this.CourseWorkDetails = this.courseWorks.find(
        (courseWorks) => courseWorks._id === this.$route.params.courseWork_id
      )
    },
    handleChange(event) {
      this[event.target.name] = event.target.value
    },
    async submitWork() {
      //create submittion
      event.preventDefault()
      const stu = localStorage.getItem("userId")
      const res = await axios.post(`${API_KEY}/submition`, {
        answer: this.answerText,
        courseWorkId: this.CourseWorkDetails._id,
        studentId: stu
      })
      this.answerText = ''
    }
  }
}
</script>

<template>
  <v-container fluid>
    <!-- <a href="">< Back</a> -->

    <v-textarea
      v-if="CourseWorkDetails"
      disabled
      label="Task"
      :model-value="CourseWorkDetails.question"
      rows="5"
      variant="outlined"
      shaped
      no-resize
      style="font-size: 22px"
    ></v-textarea>
  </v-container>

  <v-text-field
    append-icon="mdi-map-marker"
    label="Submittion Link"
    variant="outlined"
    name="answerText"
    @input="handleChange"
  ></v-text-field>

  <v-snackbar :timeout="2000" color="success" variant="outlined">
    <template v-slot:activator="{ props }">
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn size="large" v-bind="props" @click="submitWork">Submit</v-btn>
        </v-col>
      </v-row>
    </template>

    <strong>Submit Successfully</strong>
  </v-snackbar>
</template>

<style></style>
