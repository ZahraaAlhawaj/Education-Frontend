<script>
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'AdminPlans',
  data: function () {
    return {
      plans: []
    }
  },
  mounted: async function () {
    const response = await axios.get(`${BASE_URL}/plan/`)
    this.plans = response.data
  }
}
</script>

<template>
  <section>
    <h1>All Academic Programs Provided By UOGA</h1>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Type</th>
          <th class="text-left">Major</th>
          <th class="text-left">Department</th>
          <th class="text-left">College</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="plan in plans" :key="plan._id">
          <td>{{ plan.type }}</td>
          <td>{{ plan.major }}</td>
          <td>{{ plan.department }}</td>
          <td>{{ plan.collage }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>
