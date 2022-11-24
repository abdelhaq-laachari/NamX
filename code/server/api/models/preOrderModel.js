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
    date: {
<<<<<<< HEAD
        type: String,
        required: [true, "Please enter your date"]
    },
    status:{
        type:Boolean,
        default:false
    },


    },
    {
        timestamp: true,
      }
      )
module.exports = mongoose.model("PreOrder", preOrderSchema)
=======
      type: String,
      default: Date.now,
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

>>>>>>> 308672995f68c8dd53c00836e8fb84fef04019a4
