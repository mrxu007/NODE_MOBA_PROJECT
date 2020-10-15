module.exports = app => {
  const express = require('express');
  const inflection = require('inflection');
  const multer = require('multer');
  const {
    resolve
  } = require('path');
  const router = express.Router({
    mergeParams: true
  }) // Router是express的子路由管理

  //创建
  router.post('/', async (req, res) => {
    // console.log(req.body);
    const model = await req.Model.create(req.body)
    res.send(model);
  })
  // 查询列表
  router.get('/list', async (req, res) => {
    let options = {}
    if (req.Model.modelName === 'Category') {
      options.populate = 'parent'
    }
    const list = await req.Model.find({}).setOptions(options);
    res.send(list);
  })
  // 查询单条数据
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  })
  // 更新
  router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const model = await req.Model.findByIdAndUpdate(id, data);
    res.send(model);
  })
  // 删除
  router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await req.Model.findByIdAndDelete(id);
    res.send({
      status: 200,
      info: '删除分类成功'
    })
  })


  // CRUD接口
  app.use('/admin/api/crud/:resource',
    async (req, res, next) => {
      const modelName = inflection.classify(req.params.resource);
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
    res.send(file);
  })
}