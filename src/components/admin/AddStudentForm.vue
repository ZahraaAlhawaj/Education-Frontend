<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AddStudentForm',
  data: function () {
    return {
      availablePlans: [],
      student: {},
      name: '',
      email: '',
      selectedMajor: '',
      availableMajors: []
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/plan/`)
    this.availablePlans = response.data
    for (let i = 0; i < this.availablePlans.length; i++) {
      this.availableMajors.push(this.availablePlans[i].major)
    }
    console.log(this.availableMajors)
  },

  methods: {
    async AddStudent() {
      console.log(this.selectedMajor)
      console.log(this.availablePlans)
      const matchingPlans = this.availablePlans.filter((plan) => {
        return plan.major === this.selectedMajor
      })
      console.log(matchingPlans[0])
      this.student.name = this.name
      this.student.email = this.email
      this.student.password = '123123'
      this.student.plan = matchingPlans[0]._id
      const response = await axios.post(`${BASE_URL}/student/`, this.student)
      console.log(response.data)
      this.$router.push('/adminStudents')
    }
  }
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Add Student</p>
      <v-form @submit.prevent>
        <v-text-field
          class="mb-8"
          label="Name"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="name"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Email"
          variant="outlined"
          type="email"
          :rules="rules"
          v-model="email"
        ></v-text-field>
        <v-select
          label="Major"
          class="mb-8"
          :items="availableMajors"
          variant="outlined"
          :rules="rules"
          v-model="selectedMajor"
        ></v-select>
        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
          @click="AddStudent()"
        >
          Add Course
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template>
