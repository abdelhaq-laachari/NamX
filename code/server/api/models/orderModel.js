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
    quantity: {
      type: Number,
      required: [true, "Please enter your amount"],
    },
    status: {
      type: String,
      required: [true, "Please enter status"],
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
