<script>
import axios from "axios";
const API = import.meta.env.VITE_UNIHUB_API;

export default {
  name: "courseWork",
  
  data() {
    return {
      courseId: null, //maybe save it in local storage?
      course:[],
      courseWorkData: []
    };
  },
  mounted() {
    // Get the course ID from the URL
    this.courseId = this.$route.params.id;
    // Get the course work when the component is mounted
    this.getCourseWork(this.courseId);
  },
  methods: {
    async getCourseWork(id) {
      //get the course name from courses tabel
      const courseInfo = await axios.get(`${API}/course/${id}`)
      this.course = courseInfo.data

      //get course work
      const res = await axios.get(`${API}/courseWork`)
      // this.courseWorkData = res.data
      for(let i=0; i < res.data.length;i++){
      if(res.data[i].courseId.includes(id)){
      this.courseWorkData.push(res.data[i]);
      }}
// console.log(this.courseWorkData)

      
      console.log("Received course ID:", id);
      // console.log(res.data)
    },
    async addNewAssignment(id){
      const url = `/${id}`;
      // Navigate to the URL
      window.location.href = url;
    }
  },
};
</script>

<template>
  <div>
    <h1>{{ course.name }}</h1>
    <button @click="addNewAssignment(course._id)">Add New Assignment</button>
    <v-data-table >
   
    <tr  v-for="cours in courseWorkData">
      <th>{{ cours.type }}</th>
     <th><button>View Student Submition</button></th>
    </tr>
  </v-data-table>
    <!-- <p>
      {{ courseWorkData }}
    </p> -->
    <!-- <p>Course ID: {{ courseId }}</p> -->
  </div>
</template>

<style>
</style>
