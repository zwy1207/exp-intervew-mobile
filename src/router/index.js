import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Layout from '@/views/Layout'
import Detail from '@/views/Detail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/layout', component: Layout },
    { path: '/article/:id', component: Detail }
  ]
})

export default router
