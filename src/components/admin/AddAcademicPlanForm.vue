<!-- <script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AddAcademicPlanForm',
  data: function () {
    return {
      plan: {},
      name: '',
      code: '',
      credit: 0,
      timing: '',
      days: '',
      room: '',
      building: '',
      prerequisite: ''
    }
  },
  methods: {
    async AddCourse() {
      this.plan.name = this.name
      this.plan.code = this.code
      const response = await axios.post(`${BASE_URL}/plans/`, this.plan)
      console.log(response.data)
      this.$router.push('/adminPlans')
    }
  }
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Add Course</p>
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
          label="Code"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="code"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Credit"
          variant="outlined"
          type="number"
          :rules="rules"
          v-model="credit"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Timing"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="timing"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Days"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="days"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Room"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="room"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Building"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="building"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Prerequisite"
          variant="outlined"
          type="text"
          :rules="rules"
          v-model="prerequisite"
        ></v-text-field>
        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
          @click="AddCourse()"
        >
          Add Course
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template> -->
