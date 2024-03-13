<script>
import axios from 'axios'
const API_KEY = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'RegisterCourse',
  data: () => ({
    courses: [],
    headers: [
      { title: 'Course Name', align: 'start', key: 'name' },
      { title: 'Course Code', align: 'start', key: 'code' },
      { title: 'prerequisite(s)', align: 'start', key: 'preRequisite' },
      { title: 'Timing', align: 'start', key: 'timing' },
      { title: 'Days', align: 'start', key: 'days' },
      { title: 'Room', align: 'start', key: 'room' },
      { title: 'Building', align: 'start', key: 'building' },
      { title: 'Credit Hours', align: 'start', key: 'credit' },
      { title: 'Register', align: 'start', key: 'register' }
    ]
  }),
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const response = await axios.get(`${API_KEY}/course`)
      //console.log(response.data)
      this.courses = response.data
    },
    async registerCourse(id) {
      const stu = localStorage.getItem("userId")
      const userDetails = await axios.get(`${API_KEY}/student/${stu}`)
      const stuId = { ...userDetails.data }
      stuId.courses.push(id)

      const resp = await axios.put(`${API_KEY}/student/${stu}`, {
        courses: stuId.courses
      })

      const courseDetails = await axios.get(`${API_KEY}/course/${id}`)
      const courseResponse = { ...courseDetails.data }
      courseResponse.students.push(stu)
      const res = await axios.put(`${API_KEY}/course/${id}`, {
        students: courseResponse.students
      })

      const report = await axios.post(`${API_KEY}/report`, {
        course: id,
        student: stu,
        totalScore: 0
      })
      console.log('suucess')
    }
  },
  computed: {
    virtualCourses() {
      return this.courses.map((course, index) => {
        return {
          id: course._id,
          name: course.name,
          code: course.code,
          preRequisite: course.preRequisite,
          price: course.price,
          timing: course.timing,
          days: course.days,
          room: course.room,
          building: course.building,
          credit: course.credit
        }
      })
    }
  }
}
</script>

<template>
  <div>
    <v-data-table-virtual
      :headers="headers"
      :items="virtualCourses"
      height="700"
      item-value="name"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.preRequisite }}</td>
          <td>{{ item.timing }}</td>
          <td>{{ item.days }}</td>
          <td>{{ item.room }}</td>
          <td>{{ item.building }}</td>
          <td>{{ item.credit }}</td>
          <!-- Add other columns as needed -->
          <td>
            <!-- Add a link for registration -->
            <a @click="registerCourse(item.id)">Register</a>
          </td>
        </tr>
      </template>
    </v-data-table-virtual>
  </div>
</template>

<style></style>
