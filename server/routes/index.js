module.exports = app => {
  const express = require('express');
  const inflection = require('inflection');
  const multer = require('multer');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  const {
    secret
  } = require('../common/secret_code');
  const {
    resolve
  } = require('path');
  const router = express.Router({
    mergeParams: true
  }) // Router是express的子路由管理

  //创建
  router.post('/', async (req, res) => {
    // console.log(req.body);
    await req.Model.create(req.body)
    res.send({
      "error_code": 0,
      "success": '数据创建成功'
    });
  })
  // 查询列表
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
  // 查询单条数据
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send({
      "error_code": 0,
      data: model
    });
  })
  // 更新
  router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const model = await req.Model.findByIdAndUpdate(id, data);
    res.send({
      "error_code": 0,
      "success": '数据更新成功'
    });
  })
  // 删除
  router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await req.Model.findByIdAndDelete(id);
    res.send({
      "error_code": 0,
      "success": '数据删除成功'
    })
  })


  // CRUD接口
  app.use('/admin/api/crud/:resource',
    async (req, res, next) => {
      const modelName = inflection.classify(req.params.resource);
      // console.log('正在访问model:', modelName);
      const Model = require(`../models/${modelName}`);
      req.Model = Model;
      next();
    }, router) // 将router子路由挂载到app上面的高级路由上


  // 上传文件接口
  const upload = multer({
    dest: resolve(__dirname, '../uploads')
  })

  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send({
      "error_code": 0,
      data: file
    });
  })
  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body;
    // 1.根据用户名找用户(切记密码已经被加密，不可通过用户+密码方式找用户)
    const AdminUser = require('../models/user');
    const user = await AdminUser.findOne({
      username
    }).select('+password');
    console.log(user)
    if (!user) {
      return res.status(422).send({
        'message': '用户名不存在'
      })
    }
    // 2. 校验密码
    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) {
      return res.status(422).send({
        'message': '用户名或密码错误'
      })
    }
    // 3. 返回token  需要用到jsonwebtoken
    const token = jwt.sign({ // 第一个参数  需要加密的数据， 第二个参数 密钥
      id: user._id
    }, secret);
    res.send({
      token
    })
    // console.log(secret);
    // res.send({
    //   "error_code": 0,
    // })
  })
}