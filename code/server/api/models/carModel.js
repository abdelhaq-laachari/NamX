const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your value"],
    },
    edition: {
      type: String,
      required: [true, "Please enter your value"],
    },
    horsepower: {
      type: Number,
      required: [true, "Please enter your value"],
    },
    maxSpeed: {
      type: String,
      required: [true, "Please enter your value"],
    },
    acceleration: {
      type: Number,
      required: [true, "Please enter your value"],
    },
    autonomy: {
      type: Number,
      required: [true, "Please enter your value"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Car", carSchema);
