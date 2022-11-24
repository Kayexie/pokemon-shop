const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  adoptDate: {
    type: Date,
    default: Date.now
  },
  pokemons: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pokemon'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
