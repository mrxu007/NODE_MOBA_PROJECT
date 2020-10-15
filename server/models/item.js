const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  iconURL: String
})
module.exports = mongoose.model('Item', schema);