const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  author: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Log', schema);