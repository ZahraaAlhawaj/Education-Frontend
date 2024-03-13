<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AddFacultyForm',
  data: function () {
    return {
      faculty: {},
      name: '',
      email: '',
      phoneNumber: ''
    }
  },
  methods: {
    async AddFacultyMember() {
      this.faculty.name = this.name
      this.faculty.email = this.email
      this.faculty.password = '123123'
      this.faculty.phoneNumber = this.phoneNumber
      console.log(this.faculty)
      const response = await axios.post(`${BASE_URL}/faculty/`, this.faculty)
      console.log(response.data)
      this.$router.push('/adminFaculty')
    }
  }
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Add Faculty Member</p>
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
        <v-text-field
          class="mb-8"
          label="Phone Number"
          variant="outlined"
          type="number"
          :rules="rules"
          v-model="phoneNumber"
        ></v-text-field>
        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
          @click="AddFacultyMember()"
        >
          Add Member
        </v-btn>
      </v-form>
    </v-card>
  </section>
</template>
