const isDevelopment = process.env.NODE_ENV === 'development'
// console.log('1', process.env.NODE_ENV)
// console.log('2', process.env.VUE_APP_API_URL)
// 判断是否是开发环境还是生产环境
module.exports = {
  baseURL: isDevelopment ? process.env.VUE_APP_API_URL : 'http://www.jsone.club/admin/api'
}
