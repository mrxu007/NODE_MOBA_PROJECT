const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  items: [{
    image: {
      type: String
    },
    url: {
      type: String
    }
  }],
  date: {
    type: String,
    default: new Date()
  }
})

module.exports = mongoose.model('Ad', schema);