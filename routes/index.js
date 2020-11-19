const express = require('express');
const app = express();

app.use(require('./tasks'));

module.exports = app;