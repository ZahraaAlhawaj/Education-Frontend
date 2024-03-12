import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/SignIn.vue'
import HomePage from './components/HomePage.vue'
import RegisterStudent from './components/students/RegisterStudent.vue'
// ADD YOUR PATHS HERE

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  {
    path: '/registerStudent',
    component: RegisterStudent,
    name: 'RegisterStudent'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
