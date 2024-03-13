import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/SignIn.vue'
import HomePage from './components/HomePage.vue'
import RegisterStudent from './components/students/RegisterStudent.vue'
import AdminCourses from './components/admin/AdminCourses.vue'
import AdminPlans from './components/admin/AdminPlans.vue'
import AdminStudents from './components/admin/AdminStudents.vue'
import AdminFaculty from './components/admin/AdminFaculty.vue'

import AddCourseForm from './components/admin/AddCourseForm.vue'
import AddAcademicPlanForm from './components/admin/AddAcademicPlanForm.vue'
import AddStudentForm from './components/admin/AddStudentForm.vue'

import courseWork from './components/faculty/courseWork.vue'
import NewAssignment from './components/faculty/NewAssignment.vue'
import studentSubmitions from './components/faculty/ViewStudentsSubmitions.vue'
import ViewStudentSubmition from './components/faculty/ViewStudentSubmition.vue'

// ADD YOUR PATHS HERE
const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  {
    path: '/registerStudent',
    component: RegisterStudent,
    name: 'RegisterStudent'
  },
  {
    path: '/adminCourses',
    component: AdminCourses,
    name: 'AdminCourses'
  },
  {
    path: '/adminFaculty',
    component: AdminFaculty,
    name: 'AdminFaculty'
  },
  {
    path: '/adminPlans',
    component: AdminPlans,
    name: 'AdminPlans'
  },
  {
    path: '/adminStudents',
    component: AdminStudents,
    name: 'AdminStudents'
  },
  {
    path: '/addcourseform',
    component: AddCourseForm,
    name: 'AddCourseForm'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
