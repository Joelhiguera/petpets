const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema({
  name: {
    type: String, 
    required: true, 
    trim: true, 
  },
  description: {
    type: String
  },
  charachteristics: {
    type: String
  },
  image: {
    type: String
  },
  age: {
    type: Number,
    min: 0,
    default: 0
  },
  gender: {
    type: String
  },
  size: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet