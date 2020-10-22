module.exports = (options) => async (req, res, next) => {
  console.log('当前用户的权限组为', req.userGroupId);
  if (req.userGroupId === 999) {
    next();
  } else {
    next(new Error('非常抱歉,您为普通用户不可以 (增删改) ---为了保护服务器的安全'));
  }
}