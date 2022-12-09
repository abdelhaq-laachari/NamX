const mongoose = require("mongoose");
const detailsSchema = mongoose.Schema(
  {
    details: [
      {
        libelle: {
          type: String,
          required: [true, "Please enter your libelle"],
        },
        value: {
          type: String,
          required: [true, "Please enter your value"],
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Details", detailsSchema);
