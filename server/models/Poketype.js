const mongoose = require('mongoose');

const { Schema } = mongoose;

const poketypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Poketype = mongoose.model('Poketype', poketypeSchema);

module.exports = Poketype;
