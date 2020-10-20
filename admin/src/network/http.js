import axios from 'axios'
import Vue from 'vue'
// import apiConfig from 'common/apiConfig'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// http.interceptors.request.use(() => {

// })
// 捕获服务端响应错误
http.interceptors.response.use(res => {
  return res
}, err => {
  Vue.prototype.$message({
    type: 'error',
    message: err.response.data.message
  })
  console.log(err.response)
  return Promise.reject(err)
})

export default http
