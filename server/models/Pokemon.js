const mongoose = require('mongoose');

const { Schema } = mongoose;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  adoptfee: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  ability: {
    type: String
  },
  pokemonType: {
    type: String
  },
  
  weakness:{
    type: String
  },
  poketype: {
    type: Schema.Types.ObjectId,
    ref: 'Poketype',
    required: true
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
