const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  gourp_id: {
    type: Number,
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Group', schema);