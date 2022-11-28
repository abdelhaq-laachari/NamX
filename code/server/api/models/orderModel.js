const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema(
  {
    idClient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    idCar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
    amount: {
      type: Number,
      required: [true, "Please enter your amount"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
