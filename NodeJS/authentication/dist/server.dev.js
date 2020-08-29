"use strict";

var express = require("express");

var bcrypt = require("bcrypt");

var _require = require("uuid"),
    uuid4 = _require.v4;

var app = express();
app.use(express.json());
var users = [];
app.get('/users', function (req, res) {
  res.json(users);
});
app.post('/users', function _callee(req, res) {
  var hashedPassword, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, 10));

        case 3:
          hashedPassword = _context.sent;
          user = {
            id: uuid4(),
            name: req.body.name,
            password: hashedPassword
          };
          users.push(user);
          res.status(201).send("user added");
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(500).send("something wrong");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
app.post('/users/login', function _callee2(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = users.find(function (user) {
            return user.name = req.body.name;
          });

          if (!(user == null)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).send("Cannot find user"));

        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 6:
          if (!_context2.sent) {
            _context2.next = 10;
            break;
          }

          res.send("Success");
          _context2.next = 11;
          break;

        case 10:
          res.send("Not allowed");

        case 11:
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          res.status(500).send("something wrong");

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 13]]);
});
app.listen(3030);