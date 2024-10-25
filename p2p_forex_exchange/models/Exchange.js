const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExchangeSchema = new Schema({
  currency: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Exchange', ExchangeSchema);
