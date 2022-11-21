const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const port = process.env.PORT || 6000; // set our port
const app = express();


app.use("/user", require("./routes/userRoutes")); // use userRoutes
app.use("/admin", require("./routes/adminRoutes")); // use adminRoutes


app.listen(port, () => console.log(`Server running on port : ${port}`)); // start the server