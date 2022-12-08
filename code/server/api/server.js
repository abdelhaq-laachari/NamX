const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const cors = require("cors"); // import cors
const { errorHandler } = require("./middleware/errorMiddleware"); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection


connectDB(); // connect to db

app.use(cors()); // enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/admin', require('./routes/adminRoutes'));



app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));
