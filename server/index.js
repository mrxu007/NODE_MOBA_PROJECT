const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  resolve
} = require('path')
const app = express();

//数据库连接
require('./common/database')(app);
// 中间件
// 跨域模块
app.use(cors());
// 用来处理post请求 
app.use(bodyParser.json()); // 原理和express.json()一样
app.use(bodyParser.urlencoded({
  extended: false
}));
// 开放http://loaclhost:300/uploads下的文件
app.use('/uploads', express.static(__dirname + '/uploads'));
// 导入路由
require('./routes/index')(app);
app.listen(3000, () => {
  console.log('http://localhost:3000');
})