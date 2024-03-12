<script>
export default {
  name: 'RegisterStudent'
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
      <p class="text-h4 mb-10 text-md-center">Register</p>
      <p class="mb-10 text-md-center">
        Application will be reviewed and confirmation will be sent via email
      </p>

      <v-form @submit.prevent>
        <v-text-field
          class="mb-8"
          label="Name"
          variant="outlined"
          type="text"
          :rules="rules"
        ></v-text-field>

        <v-text-field
          class="mb-8"
          label="Email"
          variant="outlined"
          type="email"
          :rules="rules"
        ></v-text-field>
        <v-select
          label="Major"
          class="mb-8"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming'
          ]"
          variant="outlined"
        ></v-select>
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
        Recieved Acceptance?
        <router-link to="/signIn/student">Sign in here</router-link>
      </p>
    </v-card>
  </section>
</template>
