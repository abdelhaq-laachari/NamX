const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "Please enter your value"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Car", carSchema);
