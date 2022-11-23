const  mongoose = require("mongoose");

const carSchema = mongoose.Schema(
    {
     idDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Details",  
     }
    },
    {
        timestamp: true,
      })
module.exports = mongoose.model("Car", carSchema)