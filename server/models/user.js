const mongoose = require('mongoose');
const bcript = require('bcrypt');

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

module.exports = mongoose.model('User', schema)