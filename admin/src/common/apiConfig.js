const isDevelopment = process.env.NODE_ENV === 'development';
// 判断是否是开发环境还是生产环境
module.exports = {
  baseURL: isDevelopment ? 'http://localhost3000' : 'http://www.jsone.club'
}
