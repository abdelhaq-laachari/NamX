const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    address: {
      type: String,
      required: [true, "Please enter your Address"],
    },
    city: {
      type: String,
      required: [true, "Please enter your zip code"],
    },
    zipCode: {
      type: Number,
      required: [true, "Please enter your City"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phoneNumber"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);
