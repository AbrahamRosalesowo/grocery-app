const express = require("express");

const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(require("./routes/index"));

require("./global/global");

mongoose.connect(
  process.env.URLDB,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err, res) => {
    if (err) throw err;
    console.log("Database connected successfuly");
  }
);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
