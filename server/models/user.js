const mongoose = require('mongoose');
const bcript = require('bcrypt');
const Group = require('./group')

const schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false, // 密码查不出来，就不会进行二次散列
    set(val) {
      return bcript.hashSync(val, 10);
    }
  },
  Rights_Groups: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Group',
    default: '5f8e8fd602f3713be8f3b327'
  },
  registered: {
    type: Date,
    default: Date.now
  }
})
// 如果一个model实例被多次导入就会错, 所以如果文件需要被多次使用，请使用判断
if (mongoose.models.User) {
  User = mongoose.model('User');
} else {
  User = mongoose.model('User', schema);
}

module.exports = User