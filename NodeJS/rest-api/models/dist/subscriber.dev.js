"use strict";

var mongoose = require('mongoose');

var subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    required: true,
    "default": Date.now
  }
});
module.exports = mongoose.model('Subscriber', subscriberSchema);