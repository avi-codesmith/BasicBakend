import mongoose from 'mongoose';

const laptopSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Laptop should have it's name."],
    maxLength: 40,
    unique: [
      true,
      'This name is already included, laptop name should be differnt.',
    ],
  },

  brand: {
    type: String,
    required: [true, 'Laptop should belong to a brand.'],
    maxLength: [40, 'Please add a brand name under 40 characters of length'],
  },

  price: {
    type: Number,
    required: [true, 'A laptop should have its price.'],
    max: [2000000, 'Mention a valid price'],
    validate: {
      validator: function (val) {
        if (val >= 100000) {
          return this.description?.length <= 50;
        }

        return true;
      },
      message: 'Please add a detailed description of atleast 50 chracters.',
    },
  },

  processor: {
    type: String,
    maxLength: [40, 'Processor is unvalid.'],
  },

  ram: {
    type: Number,
    max: [128, 'Please add a valid RAM'],
  },

  storage: {
    type: Number,
    max: [1200, 'Please add a valid storage'],
  },

  stock: {
    type: Number,
    default: 0,
    max: [100000000000n, 'Please add a real stock value'], //Bigint numerical literal
  },

  description: {
    type: String,
    maxLength: [400, 'Maximum character length is 200 characters'],
  },
});

export const Laptop = mongoose.model('laptops', laptopSchema);

//  MongoDB pluralised and convert model name to smallcase
// ex- Laptop --> laptops (don't be confuse again)

// ************* NEVER USE ARROW FUNC. IN VALIDATORS AS THEY DO NOT HAVE THEIR OWN THIS KEYWORD
