import mongoose from 'mongoose';

const laptopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  processor: {
    type: String,
  },

  ram: {
    type: Number,
  },

  storage: {
    type: Number,
  },

  stock: {
    type: Number,
    default: 0,
  },

  description: {
    type: String,
  },
});

export const Laptop = mongoose.model('Laptop', laptopSchema);
