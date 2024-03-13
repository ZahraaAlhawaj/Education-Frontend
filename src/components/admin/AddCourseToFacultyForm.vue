<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AddStudentForm',
  data: function () {
    return {
      courses: {},
      courseNames: [],
      selectedCourse: ''
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/course/unassignedCourses`)
    this.courses = response.data
    for (let i = 0; i < this.courses.length; i++) {
      this.courseNames.push(this.courses[i].name)
    }
    console.log(this.courseNames)
  },

  methods: {
    async AddCourseToFaculty() {
      const matchingCourse = this.courses.filter((course) => {
        return course.name === this.selectedCourse
      })
      console.log(matchingCourse[0])
      let courseid = matchingCourse[0]._id
      let courseReq = {
        courseid: courseid
      }
      const response = await axios.post(
        `${BASE_URL}/faculty/addCourseToFaculty/${this.$route.params.faculty_id}`,
        courseReq
      )
      console.log(response.data)
      this.$router.push('/adminStudents')
    }
  }
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Add Course to Faculty</p>
      <v-form @submit.prevent>
        <v-select
          label="Course"
          class="mb-8"
          :items="courseNames"
          variant="outlined"
          :rules="rules"
          v-model="selectedCourse"
        ></v-select>
        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
          @click="AddCourseToFaculty()"
        >
          Add Course
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template>
