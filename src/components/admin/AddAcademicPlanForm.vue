<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AddAcademicPlanForm',
  data: function () {
    return {
      plan: {},
      type: '',
      major: '',
      department: '',
      collage: ''
    }
  },
  methods: {
    async AddPlan() {
      this.plan.type = this.type
      this.plan.department = this.department
      this.plan.major = this.major
      this.plan.collage = this.collage
      const response = await axios.post(`${BASE_URL}/plan/`, this.plan)
      console.log(response.data)
      this.$router.push('/adminPlans')
    }
  }
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Add Academic Plan</p>
      <v-form @submit.prevent>
        <v-text-field
          class="mb-8"
          label="Type"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="type"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Major"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="major"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Department"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="department"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="College"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="collage"
        ></v-text-field>

        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
          @click="AddPlan()"
        >
          Add Course
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template>
