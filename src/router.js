import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/SignIn.vue'
import HomePage from './components/HomePage.vue'

import Courses from './components/students/Courses.vue'
import RegisterCourse from './components/students/RegisterCourse.vue'
import CourseDetails from './components/students/CourseDetails.vue'
import CourseWorkDetails from './components/students/CourseWorkDetails.vue'
import StudentReport from './components/students/StudentReport.vue'
// ADD YOUR PATHS HERE

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
import AddFacultyForm from './components/admin/AddFacultyForm.vue'

import SignOut from './components/signout.vue'

import ViewFacultyMember from './components/admin/ViewFacultyMember.vue'
import AddCourseToFacultyForm from './components/admin/AddCourseToFacultyForm.vue'
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
  },
  {
    path: '/addacademicplanform',
    component: AddAcademicPlanForm,
    name: 'AddAcademicPlanForm'
  },
  {
    path: '/addstudentform',
    component: AddStudentForm,
    name: 'AddStudentForm'
  },
  {
    path: '/addfacultyform',
    component: AddFacultyForm,
    name: 'AddFacultyForm'
  },
  { path: '/signOut', component: SignOut, name: 'SignOut' },
  {
    path: '/adminFaculty/:faculty_id',
    component: ViewFacultyMember,
    name: 'ViewFacultyMember'
  },
  {
    path: '/addcoursetofacultyform/:faculty_id',
    component: AddCourseToFacultyForm,
    name: 'AddCourseToFacultyForm`'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
