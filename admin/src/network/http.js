import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'
// import apiConfig from 'common/apiConfig'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use((config) => {
  // console.log(config)
  // 如果存在 user_login_token 才放入头字段
  const loginToken = localStorage.getItem('user_login_token')
  if (loginToken) {
    config.headers.Authorization = 'Bearer ' + loginToken
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 捕获服务端响应错误
http.interceptors.response.use(res => {
  // console.log(res)
  return res
}, err => {
  Vue.prototype.$message({
    type: 'error',
    message: err.response.data.message
  })
  if (err.response.status === 401) {
    router.push('/login')
  }
  // console.log(err.response)
  return Promise.reject(err)
})

export default http
