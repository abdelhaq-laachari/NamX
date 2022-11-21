const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const { errorHandler } = require("./middleware/errorMiddleware"); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();


app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies 

app.use("/user", require("./routes/userRoutes")); // use userRoutes
app.use("/admin", require("./routes/adminRoutes")); // use adminRoutes
app.use(errorHandler); // Error handler


app.listen(port, () => console.log(`Server running on port : ${port}`)); // start the server