const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  model: {
    type: String,
    required: [true, "Please enter your value"],
  },
});
module.exports = mongoose.model("Car", carSchema);
