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
if (mongoose.models.Group) {
  Group = mongoose.model('Group');
} else {
  Group = mongoose.model('Group', schema);
}
module.exports = Group;