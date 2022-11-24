const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    Address: {
      type: String,
      required: [true, "Please enter your Address"],
    },
    City: {
      type: String,
      required: [true, "Please enter your City"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phoneNumber"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
  },
<<<<<<< HEAD
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  Address: {
    type: String,
    required: [true, "Please enter your Address"],
  },
  City: {
    type: String,
    required: [true, "Please enter your City"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your phoneNumber"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
   
},
{
  timestamp: true,
}
=======
  {
    timestamp: true,
  }
>>>>>>> 308672995f68c8dd53c00836e8fb84fef04019a4
);

module.exports = mongoose.model("Client", clientSchema);
