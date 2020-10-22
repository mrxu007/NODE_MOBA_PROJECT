module.exports = app => {
  const express = require('express');
  const multer = require('multer');
  const bcrypt = require('bcrypt');
  const assert = require('http-assert');
  const jwt = require('jsonwebtoken');
  const resourceMiddleWare = require('../common/middleWare/resourceMiddleWare');
  const authMiddleWare = require('../common/middleWare/authMiddleWare');
  const groupAuth = require('../common/middleWare/groupAuth');
  const {
    resolve
  } = require('path');
  const AdminUser = require('../models/user')
  const {
    secret
  } = require('../common/secret_code');
  // Router是express的子路由管理 
  const router = express.Router({
    mergeParams: true
  })


  //创建API
  router.post('/', groupAuth(), async (req, res) => {
    // console.log(req.body);
    await req.Model.create(req.body)
    res.send({
      "error_code": 0,
      "success": '数据创建成功'
    });
  })

  // 查询API
  router.get('/list', async (req, res) => {

    let options = {}
    if (req.Model.modelName === 'Category') {
      options.populate = 'parent'
    }
    const list = await req.Model.find({}).sort({
      _id: -1
    }).setOptions(options);
    res.send({
      "error_code": 0,
      "data": list
    });
  })

  // 查询单挑API
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send({
      "error_code": 0,
      data: model
    });
  })

  // 更新API
  router.put('/:id', groupAuth(), async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const model = await req.Model.findByIdAndUpdate(id, data);
    res.send({
      "error_code": 0,
      "success": '数据更新成功'
    });
  })

  // 删除API
  router.delete('/:id', groupAuth(), async (req, res) => {
    let id = req.params.id;
    await req.Model.findByIdAndDelete(id);
    res.send({
      "error_code": 0,
      "success": '数据删除成功'
    })
  })

  // CRUD API
  app.use('/admin/api/crud/:resource', authMiddleWare(), resourceMiddleWare(), router) // 将router子路由挂载到app上面的高级路由上


  // 查询上传文件路径
  const upload = multer({
    dest: resolve(__dirname, '../uploads')
  })

  // 上传文件API
  app.post('/admin/api/upload', authMiddleWare(), upload.single('file'), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send({
      "error_code": 0,
      data: file
    });
  })

  // 登录API
  app.post('/admin/api/login', async (req, res, next) => {
    try {
      const {
        username,
        password
      } = req.body;
      // 1.根据用户名找用户(切记密码已经被加密，不可通过用户+密码方式找用户)
      // console.log(username);
      const user = await AdminUser.findOne({
        username
      }).select('+password').populate('Rights_Groups');
      assert(user, 422, '用户名不存在') // 会抛出一个错误，需要进行捕获
      // 2. 校验密码
      const isValid = bcrypt.compareSync(password, user.password);
      assert(isValid, 422, '用户或密码错误')
      // 3. 返回token  需要用到jsonwebtoken
      const user_login_token = jwt.sign({ // 第一个参数  需要加密的数据， 第二个参数 密钥
        id: user._id,
        name: user.username,
        gourp_id: user.Rights_Groups.gourp_id
      }, secret);
      // user.password = '密码已加密';
      const userinfo = {
        Rights_Groups: user.Rights_Groups,
        username: user.username,
        password: '已加密',
        registered: user.registered
      }
      // req.userinfo = userInfo;
      res.send({
        user_login_token,
        userinfo
      })
    } catch (error) {
      next(error);
    }
  })
  // 汇总捕获异常API
  app.use(async (err, req, res, next) => {
    if (err.message == 'invalid token') {
      err.statusCode = 401
      err.message = '请先登录再操作'
    } else if (err.message == 'jwt malformed') {
      err.statusCode = 401
      err.message = '请先登录再操作'
    }
    return res.status(err.statusCode || 500).send({
      'message': err.message
    })
  })
}