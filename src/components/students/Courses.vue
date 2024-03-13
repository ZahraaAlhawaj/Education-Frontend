<script>
import axios from 'axios'
const API_KEY = import.meta.env.VITE_UNIHUB_API
export default {
  name: 'Course',
  components: {},
  data: () => ({
    courses: [],
    cWorkId: null,
    cWorks: null,
    finalCourseGrade: [],
    allCourseWork: null,
    headers: [
      { title: 'Course Name', align: 'start', key: 'name' },
      { title: 'Course Code', align: 'start', key: 'code' },
      { title: 'Current grade', align: 'start', key: 'grade' },
      { title: 'Timing', align: 'start', key: 'timing' },
      { title: 'Room', align: 'start', key: 'room' },
      { title: 'Building', align: 'start', key: 'building' },
      { title: 'View', align: 'start', key: 'view' }
    ]
  }),
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const stu = '65f026a5302b0ed08c2617c5'
      const response = await axios.get(`${API_KEY}/student/${stu}`)
      this.courses = response.data.courses

      for (let i = 0; i < this.courses.length; i++) {
        //this.getGrade(this.courses[i]._id)
        const crsGrade = await this.getGrade(this.courses[i]._id)
        this.finalCourseGrade.push({
          Course: this.courses[i],
          courseGrade: crsGrade
        })
      }
    },
    async courseDetails(id) {
      this.$router.push(`/courseDetails/${id}`)
    },

    async getGrade(id) {
      let cGrade = 0
      let stuId = '65f026a5302b0ed08c2617c5'
      const res = await axios.get(`${API_KEY}/courseWork`)
      this.allCourseWork = res.data

      for (let i = 0; i < this.allCourseWork.length; i++) {
        if (this.allCourseWork[i].courseId[0] == id) {
          this.cWorkId = this.allCourseWork[i]._id
          const resWork = await axios.get(
            `${API_KEY}/courseWork/${this.cWorkId}`
          )
          this.cWorks = resWork.data

          for (let j = 0; j < this.cWorks.submitions.length; j++) {
            if (this.cWorks.submitions[j].studentId[0] == stuId) {
              cGrade += this.cWorks.submitions[j].grade
            }
          }
        }
      }
      return cGrade
    }
  },
  computed: {
    virtualCourses() {
      return this.finalCourseGrade.map((course, index) => {
        return {
          id: course.Course._id,
          name: course.Course.name,
          code: course.Course.code,
          grade: course.courseGrade,
          timing: course.Course.timing,
          room: course.Course.room,
          building: course.Course.building
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
      height="400"
      item-value="name"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item.timing }}</td>
          <td>{{ item.room }}</td>
          <td>{{ item.building }}</td>
          <!-- Add other columns as needed -->
          <td>
            <!-- Add a link for registration -->
            <button @click="courseDetails(item.id)">View</button>
          </td>
        </tr>
      </template>
    </v-data-table-virtual>
  </div>
</template>

<style></style>
