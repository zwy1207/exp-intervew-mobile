import axios from 'axios'
import { Toast } from 'vant'
// 创建实例，自定义配置
const instance = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 请求和响应拦截器
// 添加请求拦截器
// 因为axios创建了实例，instance，所以用instance代替了 axios
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  if (error.response.data.message) {
    // 这里不能用this.$toast,因为是挂载到组件的，这里不是组件，this指向window,需要引入 {Toast}
  // this.$toast.fail(error.response.data.message)
    Toast.fail(error.response.data.message)
  }

  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出实例
export default instance
