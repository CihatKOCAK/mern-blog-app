const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(console.log("Database connected successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
