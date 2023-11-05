// 本文件用于存放和用户相关的请求函数
import request from '@/utils/request'

// 1. 注册用户
export const register = (data) => {
  return request.post('/user/register', data)
}

// 2. 登录账号
export const login = (data) => {
  return request.post('/user/login', data)
}
