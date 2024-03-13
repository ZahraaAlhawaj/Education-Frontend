<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AdminFaculty',
  data: function () {
    return {
      faculty: []
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/faculty/`)
    this.faculty = response.data
  }
}
</script>
<template>
  <section>
    <h1>UOGA Faculty</h1>
    <router-link to="/addfacultyform" name="AddFacultyForm"
      >Add a faculty member</router-link
    >
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prof in faculty" :key="prof._id">
          <td>{{ prof.name }}</td>
          <td>{{ prof.email }}</td>
          <td>{{ prof.phoneNumber }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
