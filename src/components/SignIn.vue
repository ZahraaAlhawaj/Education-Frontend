<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'SignIn',
  data: () => ({
    userTypes: ['admin', 'faculty', 'student'],
    userType: '',
    email: '',
    password: '',
    rules: [
      (value) => {
        if (value) return true

        return 'Fill Out Field'
      }
    ]
  }),
  updated() {
    this.userType = this.$route.params.userType
    console.log(this.userType)
  },
  methods: {
    async signIn() {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: this.email,
        password: this.password,
        userType: this.userType
      })
      localStorage.setItem('email', response.data.user.email)
      localStorage.setItem('userType', response.data.user.userType)
      localStorage.setItem('userId', response.data.user.id)
      console.log(
        `we're signed in! ${this.email}  ${this.password}  ${this.userType} this is the id: ${response.data.user.id}`
      )
      this.email = ''
      this.password = ''
    }
  }
}
</script>
<template>
  <main>
    <section class="mt-16">
      <v-card class="mx-auto pa-10" max-width="700">
        <p class="text-h4 mb-10 text-md-center">Sign In</p>
        <v-form @submit.prevent>
          <v-text-field
            class="mb-8"
            label="Email"
            v-model="email"
            variant="outlined"
            type="email"
            :rules="rules"
            @input="handleChange"
          ></v-text-field>
          <v-text-field
            class="mb-8"
            label="Password"
            variant="outlined"
            type="password"
            v-model="password"
            :rules="rules"
          ></v-text-field>
          <v-select
            label="Sign In As"
            class="mb-8"
            :items="userTypes"
            variant="outlined"
            :rules="rules"
            v-model="userType"
          ></v-select>
          <v-btn
            type="submit"
            color="red-darken-4"
            rounded="xl"
            size="x-large"
            class="mt-2 mb-8"
            block
            @click="signIn()"
          >
            Sign In
          </v-btn>
        </v-form>
        <p>
          Not a Student Yet?
          <router-link to="/registerStudent">Apply Here</router-link>
        </p>
      </v-card>
    </section>
  </main>
</template>
