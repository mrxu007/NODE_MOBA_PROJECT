const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  author: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: String,
    default: new Date(),
  }
})

module.exports = mongoose.model('Log', schema);