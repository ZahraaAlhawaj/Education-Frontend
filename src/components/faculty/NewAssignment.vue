<script>
import axios from "axios"
const API = import.meta.env.VITE_UNIHUB_API
export default {
  name: "newAssignment",
  data() {
    return {
      formData: {
        type: "",
        question: "",
        weight: null,
      },
      courseId: null,
      college: null,
    }
  },
  mounted() {
    this.courseId = this.$route.params.id
    this.getCourseWork(this.courseId)
    
  },
  methods: {
    async getCourseWork(id) {
      console.log("Received course ID:", id)
      const getCollegeName = await axios.get(`${API}/plan`)
      console.log(getCollegeName.data)
      for(let i=0; i < getCollegeName.data.length;i++){
        
      if(getCollegeName.data[i].courses.includes(id)){
      this.college = getCollegeName.data[i].collage
      break
      }
      }
      console.log(this.college)
    },
    async addAssignment() {
      // const getCollegeName = await axios.get(`${API}/plan`)
      // console.log(getCollegeName.data)
      // this.college = getCollegeName.data

      const assignmentToAdd = {
        courseId: this.courseId,
        type: this.formData.type,
        weight: this.formData.weight,
        question: this.formData.question,
        college: this.college 
      }

      try {
        const response = await axios.post(`${API}/courseWork`, assignmentToAdd)
        console.log("Assignment added successfully:", response.data)
        alert("Assignment Added")
        this.resetForm()
      } catch (error) {
        console.error("Error adding assignment:", error)
      }
    },
    resetForm() {
      this.formData.type = ""
      this.formData.question = ""
      this.formData.weight = null
    },
    submitForm() {
      this.addAssignment()
    },
  },
}
</script>
<template>
  <section class="mt-16">
    <v-card class="mx-auto pa-10" max-width="700">
  <p class="text-h4 mb-10 text-md-center">New Assignment</p>
  <v-form @submit.prevent="submitForm">
    <v-text-field v-model="formData.type" placeholder="Name" name="type" />
    <br /><br />
    <v-text-field v-model="formData.question" placeholder="Task" name="question" />
    <br /><br />
    <v-text-field
      v-model.number="formData.weight"
      placeholder="Weight"
      type="number"
      name="weight"
    />
    <br /><br />
    <v-btn  color="red-darken-4"
          rounded="xl"
          size="x-large"
          class="mt-2 mb-8"
          block type="submit">Add To Course</v-btn>
  </v-form>
  </v-card>
  </section>
</template>
<style></style>
