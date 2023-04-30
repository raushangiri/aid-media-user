const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/connection");

const cookieParser = require("cookie-parser");

const registration = require("./modal/registrationSchema");
app.use(express.json());
app.use(cookieParser());

// router page required here
app.use(require("./router/auth"));

//2nd step
const PORT = process.env.PORT || 7000;

// //3rd step
if (process.env.NODE_ENV == "production") {
  app.use(express.static("seller_frontend/build"));
}

app.listen(PORT, () => {
  console.log(`Application running at port:${PORT}`);
});
