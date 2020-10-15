module.exports = app => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://xujianzhou:xu1239212247,.@127.0.0.1:27017/MOBA', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  // 监听数据库
  mongoose.connection.on('connected', () => {
    console.log('数据库连接成功');
  })
  mongoose.connection.on('disconnected', () => {
    console.log('数据库连接失败');
  })
  mongoose.connection.on('error', () => {
    console.log('数据库信息错误');
  })
}