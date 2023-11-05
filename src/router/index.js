import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Layout from '@/views/Layout'
import Detail from '@/views/Detail'
import Article from '@/views/Article'
import Like from '@/views/Like'
import Collect from '@/views/Collect'
import User from '@/views/User'
import { getToken } from '@/utils/storage'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/',
      redirect: '/article',
      component: Layout,
      children: [
        { path: '/article', component: Article },
        { path: '/like', component: Like },
        { path: '/collect', component: Collect },
        { path: '/user', component: User }
      ]
    },
    { path: '/article/:id', component: Detail }
  ]
})

// 白名单
const whiteList = ['/login', '/register']
// 页面拦截-全局前置守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    // 如果有token
    next()
  } else {
    // 没有token，先看看去哪
    // 判断去的路径 to.path ,是否包含在白名单内
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 如果去的也不在白名单，就拦截，强制去到指定页面
      next('/login')
    }
  }
})

export default router
