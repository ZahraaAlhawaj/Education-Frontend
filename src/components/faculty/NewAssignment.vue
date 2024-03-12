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
    },
    async addAssignment() {
      const assignmentToAdd = {
        courseId: this.courseId,
        type: this.formData.type,
        weight: this.formData.weight,
        question: this.formData.question,
        // college: this.college // You can set college if you have it available
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
  <h1>New Assignment</h1>
  <form @submit.prevent="submitForm">
    <input v-model="formData.type" placeholder="Name" name="type" />
    <br /><br />
    <textarea v-model="formData.question" placeholder="Task" name="question" />
    <br /><br />
    <input
      v-model.number="formData.weight"
      placeholder="Weight"
      type="number"
      name="weight"
    />
    <br /><br />
    <button type="submit">Add To Course</button>
  </form>
</template>
<style></style>
