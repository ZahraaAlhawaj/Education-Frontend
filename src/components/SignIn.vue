<script>
export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: '',
    rules: [
      (value) => {
        if (value) return true

        return 'Fill Out Field'
      }
    ]
  })
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Sign In</p>

      <v-form @submit.prevent>
        <v-text-field
          class="mb-8"
          label="Email"
          variant="outlined"
          type="email"
          :rules="rules"
        ></v-text-field>
        <v-text-field
          class="mb-8"
          label="Password"
          variant="outlined"
          type="password"
          :rules="rules"
        ></v-text-field>
        <v-btn
          type="submit"
          color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block
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
</template>
