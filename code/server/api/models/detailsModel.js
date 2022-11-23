const mongoose = require("mongoose");
const detailsSchema = mongoose.Schema({
  libelle: {
    type: String,
    required: [true, "Please enter your libelle"],
  },
  value: {
    type: String,
    required: [true, "Please enter your value"],
  },
  idCar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
  },
});
module.exports = mongoose.model("Details", detailsSchema);
