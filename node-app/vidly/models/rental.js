const Joi = required("joi");
const mongoose = required("mongoose");

const Rental = mongoose.mondel(
  "Rental",
  new mongoose.Schema({
    customer: {
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 5,
          maxlenght: 50,
        },
        isGold: {
          type: Boolean,
          default: false,
        },
        phone: {
          type: String,
        },
      }),
    },
  })
);
