const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  iconURL: String,
  title: {
    type: String
  },
  categories: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  }],
  score: {
    difficult: {
      type: Number
    },
    skills: {
      type: Number
    },
    attack: {
      type: Number
    },
    survice: {
      type: Number
    }
  },
  skills: [{
    icon: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    tips: {
      type: String
    }
  }],
  items1: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  items2: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Item'
  }],
  usageTips: {
    type: String
  },
  battleTips: {
    type: String
  },
  teamTips: {
    type: String
  },
  partners: [{
    hero: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Hero'
    },
    description: {
      type: String
    }
  }]
})

module.exports = mongoose.model('Hero', schema);