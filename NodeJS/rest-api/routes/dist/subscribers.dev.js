"use strict";

var express = require("express");

var router = express.Router();

var Subscriber = require('../models/subscriber');

var subscriber = require("../models/subscriber"); // Getting all


router.get('/', function _callee(req, res) {
  var _subscriber;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Subscriber.find());

        case 3:
          _subscriber = _context.sent;
          res.json(_subscriber);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Getting one

router.get('/:id', getSubscriber, function (req, res) {
  res.json(res.subscriber);
}); // Creating one

router.post('/', function _callee2(req, res) {
  var subscriber, newSubscriber;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          subscriber = new Subscriber({
            name: req.body.name,
            subscribedToChannel: req.body.subscribedToChannel
          });
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(subscriber.save());

        case 4:
          newSubscriber = _context2.sent;
          res.status(201).json(newSubscriber);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(400).json({
            message: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // Update one

router.patch('/:id', getSubscriber, function _callee3(req, res) {
  var updatedSubscriber;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (req.body.name != null) {
            res.subscriber.name = req.body.name;
          }

          if (req.body.subscribedToChannel != null) {
            res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
          }

          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(res.subscriber.save());

        case 5:
          updatedSubscriber = _context3.sent;
          res.json(updatedSubscriber);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          res.status(404).json({
            message: _context3.t0.message
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); // Delete one

router["delete"]('/:id', getSubscriber, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(res.subscriber.remove());

        case 3:
          res.json({
            message: "deleted subscriber"
          });
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
});

function getSubscriber(req, res, next) {
  var subscriber;
  return regeneratorRuntime.async(function getSubscriber$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Subscriber.findById(req.params.id));

        case 3:
          subscriber = _context5.sent;

          if (!(subscriber == null)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Cannot find subscriber'
          }));

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: _context5.t0.message
          }));

        case 11:
          res.subscriber = subscriber;
          next();

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

module.exports = router;