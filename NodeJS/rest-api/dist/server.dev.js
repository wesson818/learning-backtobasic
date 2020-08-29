"use strict";

require('dotenv').config();

var express = require('express');

var app = express();

var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', function (error) {
  return console.log(error);
});
db.once('open', function () {
  return console.log("connect to database");
});
app.use(express.json());

var subscriberRouter = require('./routes/subscribers');

app.use('/subscribers', subscriberRouter);
app.listen(3000, function () {
  return console.log("server started");
});