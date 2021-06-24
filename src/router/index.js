import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../views/Todolist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: TodoList
  }
]

const router = new VueRouter({
  routes
})

export default router
