const mongoose = require("mongoose");
const preOrderSchema = mongoose.Schema(
  {
    idClient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    idAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
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
module.exports = mongoose.model("PreOrder", preOrderSchema);
