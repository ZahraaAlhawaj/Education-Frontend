import { createWebHistory, createRouter } from 'vue-router'
import SignIn from './components/SignIn.vue'
import HomePage from './components/HomePage.vue'
import courseWork from './components/faculty/courseWork.vue'

// ADD YOUR PATHS HERE
const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/signIn', component: SignIn, name: 'SignIn' },
  { path: '/course/:id', component: courseWork, name: 'courseWork' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
