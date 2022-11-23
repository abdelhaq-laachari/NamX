const mongoose = require("mongoose");

const clientSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please enter your first name"]
    } ,
    lastName:{
        type:String,
        required:[true,"Please enter your last name"]
    } ,
    Address:{
        type:String,
        required:[true,"Please enter your Address"]
    },
    City:{
        type:String,
        required:[true,"Please enter your City"]
    },
    phoneNumber:{
        type:String,
        required:[true,"Please enter your phoneNumber"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true
    },
    

},
{
    timestamp: true,
  }
  )

module.exports=mongoose.model("Client",clientSchema)