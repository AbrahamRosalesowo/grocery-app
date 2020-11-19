const express = require("express");

const mongoose = require("mongoose");

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./routes/index"));

mongoose.connect(
  "mongodb://localhost:27017/todo",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;
    console.log("Database connected successfuly");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
