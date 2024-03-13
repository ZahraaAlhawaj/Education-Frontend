import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/SignIn.vue'
import HomePage from './components/HomePage.vue'
import Courses from './components/students/Courses.vue'
import RegisterCourse from './components/students/RegisterCourse.vue'
import CourseDetails from './components/students/CourseDetails.vue'
import CourseWorkDetails from './components/students/CourseWorkDetails.vue'
import StudentReport from './components/students/StudentReport.vue'
// ADD YOUR PATHS HERE

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  //students
  { path: '/courses', component: Courses },
  { path: '/registerCourse', component: RegisterCourse },
  { path: '/courseDetails/:course_id', component: CourseDetails },
  { path: '/courseWorkDetails/:courseWork_id', component: CourseWorkDetails },
  { path: '/studentReport', component: StudentReport }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
