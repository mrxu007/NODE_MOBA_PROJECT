// 登录鉴权
module.exports = options => async (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const assert = require('http-assert');
  const AdminUser = require('../..//models/user');
  const {
    secret
  } = require('../secret_code');
  try {
    // console.log(secret);
    const token = String(req.headers.authorization || '').split(' ').pop();
    // console.log(token)
    assert(token, 401, '请先登录再操作');
    const {
      id,
      name,
      gourp_id
    } = jwt.verify(token, secret);
    assert(id, 401, '无效的jwt token(请先登录)')
    const user = AdminUser.findById(id).populate('Rights_Groups');
    assert(user, 401, '请先登录再操作');
    // console.log(id, name, gourp_id);
    const userGroupId = gourp_id;
    req.userGroupId = userGroupId
    await next();
  } catch (error) {
    // console.log(error)
    next(error);
  }
};