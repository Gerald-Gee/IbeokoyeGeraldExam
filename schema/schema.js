const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  size: String
});

const Good = mongoose.model('Good', goodsSchema);

module.exports = Good;