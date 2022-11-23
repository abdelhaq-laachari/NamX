const mongoose = require('mongoose');
const preOderSchema = mongoose.Schema;

const preOrderSchema = mongoose.Schema({
    idClient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
    },
    idAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    },
    idCar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
    },
    date: {
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