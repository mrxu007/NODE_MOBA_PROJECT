const category = require('../models/category');

module.exports = app => {
  const express = require('express')
  const router = express.Router() // Router是express的子路由管理
  const Category = require('../models/category');

  //创建分类
  router.post('/categories', async (req, res) => {
    console.log(req.body);
    const model = await Category.create(req.body)
    res.send(model);
  })
  // 查分类列表
  router.get('/categories/list', async (req, res) => {
    const list = await Category.find({}).populate('parent');
    res.send(list);
  })
  // 查单条数据
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id);
    res.send(model);
  })
  // 更新分类名称
  router.put('/categories/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const model = await Category.findByIdAndUpdate(id, data);
    res.send(model);
  })
  // 删除分类
  router.delete('/categories/:id', async (req, res) => {
    let id = req.params.id;
    await Category.findByIdAndDelete(id);
    res.send({
      status: 200,
      info: '删除分类成功'
    })
  })



  app.use('/admin/api', router) // 将router子路由挂载到app上面的高级路由上
}