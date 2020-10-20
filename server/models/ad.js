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
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Ad', schema);